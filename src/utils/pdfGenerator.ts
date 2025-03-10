
import { jsPDF } from "jspdf";
import "jspdf-autotable";

declare module "jspdf" {
  interface jsPDF {
    autoTable: (options: any) => jsPDF;
  }
}

interface FortuneData {
  name: string;
  birthdate: string;
  category: string;
  question?: string;
  title: string;
  content: string;
}

export const generateFortunePDF = (data: FortuneData): string => {
  try {
    console.log("Generating PDF with data:", data);
    
    // Create new jsPDF instance with UTF-8 encoding support
    const doc = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
    });
    
    // Set default font - using standard fonts that support Chinese
    // Make sure to use a standard PDF font that handles UTF-8
    doc.setFont("helvetica");
    
    // Add document title
    doc.setFontSize(20);
    doc.setTextColor(0, 0, 128);
    // Use the Unicode characters directly
    const title = "运势解读报告";
    doc.text(title, 105, 20, { align: "center" });
    
    // Add creation date
    const today = new Date();
    doc.setFontSize(10);
    doc.setTextColor(100, 100, 100);
    doc.text(
      `生成日期: ${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`,
      105, 
      30, 
      { align: "center" }
    );
    
    // Add decorative line
    doc.setDrawColor(120, 100, 200);
    doc.setLineWidth(0.5);
    doc.line(20, 35, 190, 35);
    
    // Add user information
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    doc.text(`姓名: ${data.name}`, 20, 45);
    doc.text(`出生日期: ${data.birthdate}`, 20, 55);
    doc.text(`解读类别: ${getCategoryName(data.category)}`, 20, 65);
    
    let yPos = 75;
    
    if (data.question) {
      doc.text("您的问题:", 20, yPos);
      yPos += 10;
      // Handle long questions with wrapping
      const splitQuestion = doc.splitTextToSize(data.question, 170);
      doc.text(splitQuestion, 20, yPos);
      yPos += splitQuestion.length * 7;
    }
    
    // Add result title
    doc.setFontSize(16);
    doc.setTextColor(70, 50, 120);
    doc.text(data.title, 105, yPos, { align: "center" });
    
    // Add result content
    doc.setFontSize(12);
    doc.setTextColor(50, 50, 50);
    const splitContent = doc.splitTextToSize(data.content, 170);
    doc.text(splitContent, 20, yPos + 15);
    
    // Add footer
    const pageCount = doc.internal.pages.length - 1;
    doc.setFontSize(10);
    doc.setTextColor(150, 150, 150);
    for (let i = 1; i <= pageCount; i++) {
      doc.setPage(i);
      doc.text('由AI智能运势解读生成 - 仅供参考', 105, 285, { align: 'center' });
    }
    
    console.log("PDF generation completed successfully");
    // Return the PDF as a data URL
    return doc.output('dataurlstring');
  } catch (error) {
    console.error("PDF generation error:", error);
    throw new Error("PDF生成失败");
  }
};

// Helper function to get the Chinese name of the category
function getCategoryName(category: string): string {
  const categories: Record<string, string> = {
    'love': '爱情运势',
    'career': '事业前景',
    'health': '健康指引',
    'wealth': '财富预测',
    'general': '综合运势'
  };
  
  return categories[category] || '运势';
}
