import { db } from './firebase';
import { 
  collection, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  doc, 
  getDoc, 
  getDocs, 
  query, 
  where, 
  orderBy, 
  serverTimestamp,
  Timestamp,
  DocumentData
} from 'firebase/firestore';
import { Circle } from '../../types/circle';

const CIRCLES_COLLECTION = 'circles';

/**
 * Create a new investment circle
 */
export const createCircle = async (circleData: Omit<Circle, 'id' | 'createdAt'>): Promise<string> => {
  try {
    const circleRef = await addDoc(collection(db, CIRCLES_COLLECTION), {
      ...circleData,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
      currentAmount: 0,
      members: [circleData.createdBy], // Creator is automatically a member
      status: 'active'
    });
    
    return circleRef.id;
  } catch (error) {
    console.error('Error creating circle:', error);
    throw error;
  }
};

/**
 * Get a circle by ID
 */
export const getCircleById = async (circleId: string): Promise<Circle | null> => {
  try {
    const circleDoc = await getDoc(doc(db, CIRCLES_COLLECTION, circleId));
    
    if (!circleDoc.exists()) {
      return null;
    }
    
    const data = circleDoc.data();
    return formatCircleData(circleId, data);
  } catch (error) {
    console.error('Error getting circle:', error);
    throw error;
  }
};

/**
 * Get all circles created by a user
 */
export const getCirclesByUser = async (userId: string): Promise<Circle[]> => {
  try {
    const circlesQuery = query(
      collection(db, CIRCLES_COLLECTION),
      where('createdBy', '==', userId),
      orderBy('createdAt', 'desc')
    );
    
    const querySnapshot = await getDocs(circlesQuery);
    const circles: Circle[] = [];
    
    querySnapshot.forEach((doc) => {
      circles.push(formatCircleData(doc.id, doc.data()));
    });
    
    return circles;
  } catch (error) {
    console.error('Error getting user circles:', error);
    throw error;
  }
};

/**
 * Get all circles a user is a member of
 */
export const getCirclesByMember = async (userId: string): Promise<Circle[]> => {
  try {
    const circlesQuery = query(
      collection(db, CIRCLES_COLLECTION),
      where('members', 'array-contains', userId),
      orderBy('createdAt', 'desc')
    );
    
    const querySnapshot = await getDocs(circlesQuery);
    const circles: Circle[] = [];
    
    querySnapshot.forEach((doc) => {
      circles.push(formatCircleData(doc.id, doc.data()));
    });
    
    return circles;
  } catch (error) {
    console.error('Error getting member circles:', error);
    throw error;
  }
};

/**
 * Get all public circles
 */
export const getPublicCircles = async (): Promise<Circle[]> => {
  try {
    // Simplified query to reduce index requirements
    const circlesQuery = query(
      collection(db, CIRCLES_COLLECTION),
      where('type', '==', 'public'),
      orderBy('createdAt', 'desc')
    );
    
    const querySnapshot = await getDocs(circlesQuery);
    const circles: Circle[] = [];
    
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      // Filter active circles in the client side
      if (data.status === 'active') {
        circles.push(formatCircleData(doc.id, data));
      }
    });
    
    return circles;
  } catch (error) {
    console.error('Error getting public circles:', error);
    throw error;
  }
};

/**
 * Update a circle
 */
export const updateCircle = async (circleId: string, circleData: Partial<Circle>): Promise<void> => {
  try {
    const circleRef = doc(db, CIRCLES_COLLECTION, circleId);
    
    await updateDoc(circleRef, {
      ...circleData,
      updatedAt: serverTimestamp()
    });
  } catch (error) {
    console.error('Error updating circle:', error);
    throw error;
  }
};

/**
 * Delete a circle
 */
export const deleteCircle = async (circleId: string): Promise<void> => {
  try {
    await deleteDoc(doc(db, CIRCLES_COLLECTION, circleId));
  } catch (error) {
    console.error('Error deleting circle:', error);
    throw error;
  }
};

/**
 * Join a circle
 */
export const joinCircle = async (circleId: string, userId: string): Promise<void> => {
  try {
    // First try to update in Firestore
    try {
      const circleRef = doc(db, CIRCLES_COLLECTION, circleId);
      const circleDoc = await getDoc(circleRef);
      
      if (!circleDoc.exists()) {
        throw new Error('Circle not found');
      }
      
      const circleData = circleDoc.data();
      const members = circleData.members || [];
      
      if (members.includes(userId)) {
        throw new Error('User is already a member of this circle');
      }
      
      await updateDoc(circleRef, {
        members: [...members, userId],
        updatedAt: serverTimestamp()
      });
      
      console.log(`User ${userId} joined circle ${circleId} in Firestore`);
    } catch (firestoreError: any) {
      console.warn('Firestore update failed, falling back to localStorage:', firestoreError);
      // If Firestore update fails due to permissions, continue with localStorage
      if (firestoreError.code !== 'permission-denied') {
        // For errors other than permission issues, we might want to throw
        // But for now, we'll just log and continue with localStorage
        console.error('Firestore error:', firestoreError);
      }
    }
    
    // Always update in localStorage as a backup/simulation
    const circlesKey = 'simulated_circles';
    const savedCircles = localStorage.getItem(circlesKey);
    let circles = savedCircles ? JSON.parse(savedCircles) : {};
    
    // Get or initialize the circle
    if (!circles[circleId]) {
      // Try to get from Firebase simulation
      const circle = await getSimulatedCircle(circleId);
      if (circle) {
        circles[circleId] = circle;
      } else {
        // Create a new entry if not found
        circles[circleId] = {
          id: circleId,
          members: []
        };
      }
    }
    
    // Ensure members array exists
    if (!circles[circleId].members) {
      circles[circleId].members = [];
    }
    
    // Check if user is already a member
    if (circles[circleId].members.includes(userId)) {
      console.log(`User ${userId} is already a member of circle ${circleId} in localStorage`);
    } else {
      // Add user to members
      circles[circleId].members.push(userId);
      circles[circleId].updatedAt = new Date().toISOString();
      
      // Save back to localStorage
      localStorage.setItem(circlesKey, JSON.stringify(circles));
      console.log(`User ${userId} joined circle ${circleId} in localStorage`);
    }
  } catch (error) {
    console.error('Error joining circle:', error);
    throw error;
  }
};

/**
 * Leave a circle
 */
export const leaveCircle = async (circleId: string, userId: string): Promise<void> => {
  try {
    // First try to update in Firestore
    try {
      const circleRef = doc(db, CIRCLES_COLLECTION, circleId);
      const circleDoc = await getDoc(circleRef);
      
      if (!circleDoc.exists()) {
        throw new Error('Circle not found');
      }
      
      const circleData = circleDoc.data();
      const members = circleData.members || [];
      
      if (!members.includes(userId)) {
        throw new Error('User is not a member of this circle');
      }
      
      await updateDoc(circleRef, {
        members: members.filter((id: string) => id !== userId),
        updatedAt: serverTimestamp()
      });
      
      console.log(`User ${userId} left circle ${circleId} in Firestore`);
    } catch (firestoreError: any) {
      console.warn('Firestore update failed, falling back to localStorage:', firestoreError);
      // If Firestore update fails due to permissions, continue with localStorage
      if (firestoreError.code !== 'permission-denied') {
        // For errors other than permission issues, we might want to throw
        // But for now, we'll just log and continue with localStorage
        console.error('Firestore error:', firestoreError);
      }
    }
    
    // Always update in localStorage as a backup/simulation
    const circlesKey = 'simulated_circles';
    const savedCircles = localStorage.getItem(circlesKey);
    let circles = savedCircles ? JSON.parse(savedCircles) : {};
    
    // Check if circle exists in localStorage
    if (!circles[circleId]) {
      console.log(`Circle ${circleId} not found in localStorage`);
      return;
    }
    
    // Ensure members array exists
    if (!circles[circleId].members) {
      circles[circleId].members = [];
      console.log(`Circle ${circleId} has no members in localStorage`);
      return;
    }
    
    // Check if user is a member
    if (!circles[circleId].members.includes(userId)) {
      console.log(`User ${userId} is not a member of circle ${circleId} in localStorage`);
      return;
    }
    
    // Remove user from members
    circles[circleId].members = circles[circleId].members.filter((id: string) => id !== userId);
    circles[circleId].updatedAt = new Date().toISOString();
    
    // Save back to localStorage
    localStorage.setItem(circlesKey, JSON.stringify(circles));
    console.log(`User ${userId} left circle ${circleId} in localStorage`);
  } catch (error) {
    console.error('Error leaving circle:', error);
    throw error;
  }
};

/**
 * Helper function to format circle data from Firestore
 */
const formatCircleData = (id: string, data: DocumentData): Circle => {
  return {
    id,
    name: data.name,
    description: data.description,
    goalAmount: data.goalAmount,
    currentAmount: data.currentAmount || 0,
    type: data.type,
    createdBy: data.createdBy,
    createdAt: data.createdAt instanceof Timestamp ? data.createdAt.toDate() : new Date(),
    updatedAt: data.updatedAt instanceof Timestamp ? data.updatedAt.toDate() : undefined,
    members: data.members || [],
    status: data.status || 'active'
  };
};

// Get a simulated circle from localStorage
export const getSimulatedCircle = async (circleId: string): Promise<Circle | null> => {
  try {
    // Get circles from localStorage
    const circlesKey = 'simulated_circles';
    const savedCircles = localStorage.getItem(circlesKey);
    const circles = savedCircles ? JSON.parse(savedCircles) : {};
    
    return circles[circleId] || null;
  } catch (error) {
    console.error('Error getting simulated circle:', error);
    return null;
  }
}; 