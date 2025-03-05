import jsPDF from 'jspdf';
import 'jspdf-autotable';

// Add type definition for jsPDF with autotable
declare module 'jspdf' {
  interface jsPDF {
    autoTable: (options: any) => jsPDF;
  }
}

export interface InvestmentReceiptData {
  id: string;
  userId: string;
  userName: string;
  circleId: string;
  circleName: string;
  amount: number;
  date: Date;
}

export const generateInvestmentReceipt = (data: InvestmentReceiptData): jsPDF => {
  const doc = new jsPDF();
  
  // Add logo/header
  doc.setFontSize(20);
  doc.setTextColor(44, 62, 80);
  doc.text('Arvya Investment Platform', 105, 20, { align: 'center' });
  
  // Add receipt title
  doc.setFontSize(16);
  doc.setTextColor(52, 152, 219);
  doc.text('Investment Receipt', 105, 30, { align: 'center' });
  
  // Add horizontal line
  doc.setDrawColor(189, 195, 199);
  doc.setLineWidth(0.5);
  doc.line(20, 35, 190, 35);
  
  // Add receipt details
  doc.setFontSize(12);
  doc.setTextColor(44, 62, 80);
  
  // Format date
  const formattedDate = data.date.toLocaleDateString('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  });
  
  const formattedTime = data.date.toLocaleTimeString('en-IN', {
    hour: '2-digit',
    minute: '2-digit'
  });
  
  // Format amount
  const formattedAmount = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(data.amount);
  
  // Receipt details
  const details = [
    ['Receipt ID:', data.id],
    ['Date:', `${formattedDate} at ${formattedTime}`],
    ['Investor:', data.userName],
    ['Circle Name:', data.circleName],
    ['Amount Invested:', formattedAmount]
  ];
  
  // Add details to PDF
  let y = 50;
  details.forEach(([label, value]) => {
    doc.setFont('helvetica', 'bold');
    doc.text(label, 30, y);
    doc.setFont('helvetica', 'normal');
    doc.text(String(value), 80, y);
    y += 10;
  });
  
  // Add thank you message
  doc.setFontSize(12);
  doc.setTextColor(46, 204, 113);
  doc.text('Thank you for your investment!', 105, 110, { align: 'center' });
  
  // Add footer
  doc.setFontSize(10);
  doc.setTextColor(127, 140, 141);
  doc.text('This is a simulated receipt for demonstration purposes only.', 105, 130, { align: 'center' });
  doc.text('© Arvya Investment Platform', 105, 280, { align: 'center' });
  
  return doc;
};

export const downloadInvestmentReceipt = (data: InvestmentReceiptData): void => {
  const doc = generateInvestmentReceipt(data);
  doc.save(`investment-receipt-${data.id}.pdf`);
}; 