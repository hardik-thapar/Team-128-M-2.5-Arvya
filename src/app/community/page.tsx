"use client";

import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";

// Types
interface Post {
  id: string;
  author: string;
  authorImage: string;
  date: string;
  title: string;
  content: string;
  likes: number;
  comments: number;
  isFeatured?: boolean;
}

interface FeaturedStory {
  id: string;
  author: string;
  authorImage: string;
  title: string;
  summary: string;
  image: string;
}

const CommunityPage = () => {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [posts, setPosts] = useState<Post[]>([]);
  const [featuredStories, setFeaturedStories] = useState<FeaturedStory[]>([]);
  const [activeStoryIndex, setActiveStoryIndex] = useState(0);
  const [newPost, setNewPost] = useState({ title: "", content: "" });
  const [showLoginPrompt, setShowLoginPrompt] = useState(false);

  // Check if user is logged in
  useEffect(() => {
    const userLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(userLoggedIn);
  }, []);

  // Load posts from localStorage or initialize with sample data
  useEffect(() => {
    const storedPosts = localStorage.getItem("communityPosts");
    
    if (storedPosts) {
      setPosts(JSON.parse(storedPosts));
    } else {
      // Sample posts data
      const samplePosts: Post[] = [
        {
          id: "1",
          author: "Sarah Johnson",
          authorImage: "/avatars/avatar-1.jpg",
          date: "May 15, 2023",
          title: "How I Built My Investment Portfolio from Scratch",
          content: "When I first started investing, I had no idea where to begin. After years of trial and error, I've developed a strategy that works for me. I started by educating myself about different investment vehicles and understanding my risk tolerance. Then, I began with small investments in index funds before diversifying into individual stocks and bonds. The key was consistency and patience. I'm now helping other women in my community to start their investment journey.",
          likes: 42,
          comments: 12,
          isFeatured: true
        },
        {
          id: "2",
          author: "Michelle Lee",
          authorImage: "/avatars/avatar-2.jpg",
          date: "April 28, 2023",
          title: "Breaking the Glass Ceiling in Fintech",
          content: "As one of the few women in leadership positions at my fintech company, I've faced numerous challenges. However, I've learned that my unique perspective is my greatest strength. By advocating for inclusive product design and diverse hiring practices, I've helped our company reach new markets and improve user experiences. I encourage all women in finance to speak up and share their insights – your voice matters more than you know.",
          likes: 37,
          comments: 8
        },
        {
          id: "3",
          author: "Jessica Williams",
          authorImage: "/avatars/avatar-3.jpg",
          date: "March 12, 2023",
          title: "Financial Independence After Divorce",
          content: "Rebuilding my financial life after divorce was one of the most challenging experiences I've faced. I had to learn quickly about managing my own finances, creating a budget, and planning for my future. Through financial education and support from other women who had been through similar experiences, I was able to establish my independence. Today, I'm more financially secure than ever before, and I'm passionate about helping other women navigate similar transitions.",
          likes: 56,
          comments: 23,
          isFeatured: true
        }
      ];
      
      setPosts(samplePosts);
      localStorage.setItem("communityPosts", JSON.stringify(samplePosts));
    }

    // Featured inspiring stories
    const inspiringStories: FeaturedStory[] = [
      {
        id: "1",
        author: "Indra Nooyi",
        authorImage: "/avatars/indra-nooyi.jpg",
        title: "From Chennai to PepsiCo CEO",
        summary: "Born in Chennai, India, Indra Nooyi rose to become the CEO of PepsiCo, one of the world's largest food and beverage companies. During her 12-year tenure as CEO, she transformed the company's product portfolio and nearly doubled its revenues. Her story is a powerful example of breaking barriers in corporate leadership.",
        image: "/stories/story-1.jpg"
      },
      {
        id: "2",
        author: "Arlan Hamilton",
        authorImage: "/avatars/arlan-hamilton.jpg",
        title: "From Homeless to Venture Capitalist",
        summary: "Arlan Hamilton built Backstage Capital while homeless. She has since invested in over 170 startup companies led by underrepresented founders, including women, people of color, and LGBTQ+ entrepreneurs. Her journey demonstrates how determination can overcome even the most challenging circumstances.",
        image: "/stories/story-2.jpg"
      },
      {
        id: "3",
        author: "Sallie Krawcheck",
        authorImage: "/avatars/sallie-krawcheck.jpg",
        title: "Wall Street Leader to Fintech Founder",
        summary: "After leading Merrill Lynch, Smith Barney, and Citi Private Bank, Sallie Krawcheck founded Ellevest, a digital investment platform designed specifically for women. Recognizing the gender investment gap, she created a company that addresses women's unique financial needs and goals.",
        image: "/stories/story-3.jpg"
      },
      {
        id: "4",
        author: "Mellody Hobson",
        authorImage: "/avatars/mellody-hobson.jpg",
        title: "Breaking Barriers in Investment",
        summary: "Mellody Hobson rose from humble beginnings to become the President of Ariel Investments and the first Black woman to chair the board of a Fortune 500 company. Her advocacy for financial literacy and diversity in corporate leadership has made her one of the most influential voices in finance.",
        image: "/stories/story-4.jpg"
      }
    ];
    
    setFeaturedStories(inspiringStories);
  }, []);

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewPost(prev => ({ ...prev, [name]: value }));
  };

  // Handle post submission
  const handleSubmitPost = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isLoggedIn) {
      setShowLoginPrompt(true);
      return;
    }
    
    if (newPost.title.trim() === "" || newPost.content.trim() === "") {
      return;
    }
    
    const newPostObj: Post = {
      id: Date.now().toString(),
      author: "Current User",
      authorImage: "/avatars/default-avatar.jpg",
      date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
      title: newPost.title,
      content: newPost.content,
      likes: 0,
      comments: 0
    };
    
    const updatedPosts = [newPostObj, ...posts];
    setPosts(updatedPosts);
    localStorage.setItem("communityPosts", JSON.stringify(updatedPosts));
    
    // Reset form
    setNewPost({ title: "", content: "" });
  };

  // Carousel controls
  const nextStory = () => {
    setActiveStoryIndex((prev) => (prev + 1) % featuredStories.length);
  };
  
  const prevStory = () => {
    setActiveStoryIndex((prev) => (prev - 1 + featuredStories.length) % featuredStories.length);
  };

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <Layout>
      <div className="bg-white min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-50 to-pink-50 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <motion.h1 
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                className="text-4xl md:text-5xl font-bold mb-6 text-purple-900"
              >
                Arvya Community
              </motion.h1>
              <motion.p 
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                className="text-lg text-gray-700 mb-8"
              >
                Share your journey, learn from others, and connect with like-minded women in finance.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Featured Stories Carousel */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-purple-900">Inspiring Stories</h2>
            
            <div className="relative bg-purple-50 rounded-xl overflow-hidden shadow-md">
              {/* Carousel Navigation */}
              <button 
                onClick={prevStory}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-md"
                aria-label="Previous story"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button 
                onClick={nextStory}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-md"
                aria-label="Next story"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              
              {/* Carousel Content */}
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 relative h-64 md:h-auto">
                  <div className="absolute inset-0 bg-purple-900/20"></div>
                  <div className="w-full h-full relative">
                    {/* Placeholder for image - in production, use real images */}
                    <div className="w-full h-full bg-purple-200 flex items-center justify-center">
                      <span className="text-purple-800 text-lg">Story Image</span>
                    </div>
                  </div>
                </div>
                
                <div className="md:w-1/2 p-6 md:p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-purple-200 mr-4 flex items-center justify-center">
                      {/* Placeholder for author image */}
                      <span className="text-purple-800 text-xs">Photo</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">{featuredStories[activeStoryIndex]?.author}</h3>
                    </div>
                  </div>
                  
                  <h2 className="text-xl md:text-2xl font-bold mb-4 text-purple-900">
                    {featuredStories[activeStoryIndex]?.title}
                  </h2>
                  
                  <p className="text-gray-700 mb-6">
                    {featuredStories[activeStoryIndex]?.summary}
                  </p>
                  
                  <button className="bg-purple-800 hover:bg-purple-900 text-white px-6 py-2 rounded-full text-sm font-medium">
                    Read Full Story
                  </button>
                </div>
              </div>
              
              {/* Carousel Indicators */}
              <div className="flex justify-center p-4">
                {featuredStories.map((_, index) => (
                  <button 
                    key={index}
                    onClick={() => setActiveStoryIndex(index)}
                    className={`w-2 h-2 mx-1 rounded-full ${index === activeStoryIndex ? 'bg-purple-800' : 'bg-purple-300'}`}
                    aria-label={`Go to story ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Community Content */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Left Column - Create Post & Featured Posts */}
              <div className="lg:w-1/3">
                {/* Create Post Form */}
                <div className="bg-white rounded-xl shadow-md p-6 mb-8">
                  <h2 className="text-xl font-bold mb-4 text-purple-900">Share Your Story</h2>
                  
                  {showLoginPrompt && !isLoggedIn ? (
                    <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 mb-4">
                      <p className="text-purple-800 mb-2">Please sign in to share your story.</p>
                      <Link href="/auth/signin">
                        <button className="bg-purple-800 hover:bg-purple-900 text-white px-4 py-2 rounded-full text-sm">
                          Sign In
                        </button>
                      </Link>
                    </div>
                  ) : null}
                  
                  <form onSubmit={handleSubmitPost}>
                    <div className="mb-4">
                      <label htmlFor="title" className="block text-gray-700 mb-2 text-sm font-medium">Title</label>
                      <input
                        type="text"
                        id="title"
                        name="title"
                        value={newPost.title}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder="Give your post a title"
                        disabled={!isLoggedIn}
                      />
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="content" className="block text-gray-700 mb-2 text-sm font-medium">Your Story</label>
                      <textarea
                        id="content"
                        name="content"
                        value={newPost.content}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 min-h-[150px]"
                        placeholder="Share your experience or ask a question..."
                        disabled={!isLoggedIn}
                      />
                    </div>
                    
                    <button
                      type="submit"
                      className={`w-full py-2 px-4 rounded-full font-medium ${
                        isLoggedIn 
                          ? "bg-purple-800 hover:bg-purple-900 text-white" 
                          : "bg-gray-200 text-gray-500 cursor-not-allowed"
                      }`}
                      onClick={() => !isLoggedIn && setShowLoginPrompt(true)}
                    >
                      {isLoggedIn ? "Post to Community" : "Sign In to Post"}
                    </button>
                  </form>
                </div>
                
                {/* Featured Posts */}
                <div className="bg-white rounded-xl shadow-md p-6">
                  <h2 className="text-xl font-bold mb-4 text-purple-900">Featured Posts</h2>
                  
                  <div className="space-y-4">
                    {posts.filter(post => post.isFeatured).map(post => (
                      <div key={post.id} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                        <h3 className="font-bold text-gray-900 mb-1">{post.title}</h3>
                        <p className="text-gray-600 text-sm mb-2 line-clamp-2">{post.content}</p>
                        <div className="flex items-center text-xs text-gray-500">
                          <span>{post.author}</span>
                          <span className="mx-2">•</span>
                          <span>{post.date}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Right Column - All Community Posts */}
              <div className="lg:w-2/3">
                <div className="bg-white rounded-xl shadow-md p-6">
                  <h2 className="text-xl font-bold mb-6 text-purple-900">Community Posts</h2>
                  
                  <div className="space-y-8">
                    {posts.map(post => (
                      <div key={post.id} className="border-b border-gray-100 pb-8 last:border-0 last:pb-0">
                        <div className="flex items-center mb-4">
                          <div className="w-10 h-10 rounded-full bg-purple-200 mr-3 flex items-center justify-center">
                            {/* Placeholder for author image */}
                            <span className="text-purple-800 text-xs">Photo</span>
                          </div>
                          <div>
                            <h3 className="font-bold text-gray-900">{post.author}</h3>
                            <p className="text-xs text-gray-500">{post.date}</p>
                          </div>
                        </div>
                        
                        <h3 className="text-lg font-bold mb-2 text-gray-900">{post.title}</h3>
                        <p className="text-gray-700 mb-4">{post.content}</p>
                        
                        <div className="flex items-center text-sm text-gray-600">
                          <button className="flex items-center mr-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                            <span>{post.likes}</span>
                          </button>
                          
                          <button className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                            </svg>
                            <span>{post.comments}</span>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default CommunityPage; 