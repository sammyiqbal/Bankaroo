import React, { useState } from 'react';
import { Send, Github, Linkedin, Instagram } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const BlogPage: React.FC = () => {
  const [suggestion, setSuggestion] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Stores in localStorage 
    const suggestions = JSON.parse(localStorage.getItem('bankaroo_suggestions') || '[]');
    const newSuggestion = {
      ...suggestion,
      id: Date.now().toString(),
      date: new Date().toISOString().split('T')[0]
    };
    suggestions.push(newSuggestion);
    localStorage.setItem('bankaroo_suggestions', JSON.stringify(suggestions));
    
    setIsSubmitted(true);
    setSuggestion({ name: '', email: '', message: '' });
    
    // Reset messg after 3 seconds
    setTimeout(() => setIsSubmitted(false), 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setSuggestion({
      ...suggestion,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Bankaroo!</h1>
        </div>

        {/* CompanyHistorySection */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="flex items-center mb-6">
            
            <h2 className="text-2xl font-bold text-gray-900">Our History</h2>
          </div>
          
          <div className="prose max-w-none text-gray-700 leading-relaxed">
            <p className="mb-4">
Bankaroo started in 2025 with a simple but meaningful idea making personal finance easy and accessible for everyone.It all began when our founder, <span className="text-grey font-semibold italic">Saman Iqbal</span>, noticed how many people struggled to manage their money effectively.He imagined a tool that anyone could use without needing a degree in finance to take control of their financial life.
            </p>
            
            <p className="mb-4">
              What started as a small college project soon turned into something bigger. In early 2025,we launched the first version of Bankaroo,focusing on the essentials like tracking expenses and setting savings goals. The feedback was incredible our early users loved the simplicity and found real value in what we had built.
            </p>
            
            <p className="mb-4">
             That encouragement pushed us to keep going.Throughout, we hit some exciting milestones.We added features like customizable reports,and data export options.We also made sure the app worked seamlessly on mobile, so users could manage their finances on the go. Our community grew from a few beta testers to thousands of people who now rely on Bankaroo every day.
            </p>
            
            <p>
              Today,Bankaroo reflects what we believe in: clean,thoughtful design paired with powerful tools. We're constantly listening,learning,and improving because at the heart of everything we do is our mission to make finance management simpler,smarter,and more human.
            </p>
          </div>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Vision */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
            </div>
            
            <p className="text-gray-700 leading-relaxed">
              We dream of a world where managing money doesn't feel complicated or overwhelming.At Bankaroo,we want to empower people everywhere to become financially confident no matter where they start.Our vision is to make financial literacy and independence possible for everyone by giving them the right tools and guidance to make smart, informed decisions and build a secure future.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="flex items-center mb-6">
              <div className="bg-purple-100 p-3 rounded-full mr-4">
                
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
            </div>
            
            <p className="text-gray-700 leading-relaxed">
              Our mission is simple: to make personal finance easy and stress free. We're building tools that are intuitive, powerful, and secure so anyone can track their income, manage spending, and stay on top of their savings goals with confidence. We care deeply about creating a great experience for our users while protecting their data with the highest level of security and privacy.
            </p>
          </div>
        </div>

        {/* Suggestion Box and Founder Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Suggestion Box */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-6">
              <div className="bg-orange-100 p-3 rounded-full mr-4">
                
              </div>
              <h2 className="text-xl font-bold text-gray-900">Suggestion Box</h2>
            </div>
            
            <p className="text-gray-600 mb-6">
              We value your feedback! Share your thoughts,suggestions,or ideas to help us improve Bankaroo.
            </p>

            {isSubmitted && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                <p className="font-medium">Thank you for your suggestion!</p>
                <p className="text-sm">We appreciate your feedback and will review it carefully.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={suggestion.name}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                  placeholder="Enter your name"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={suggestion.email}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                  placeholder="Enter your email"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Suggestion
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={suggestion.message}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                  placeholder="Share your feedback or ideas..."
                  required
                ></textarea>
              </div>
              
              <div>
                <button
                  type="submit"
                  className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors flex items-center"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Submit Suggestion
                </button>
              </div>
            </form>
          </div>

          {/*Founder Section*/}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-6">
              <div className="bg-teal-100 p-3 rounded-full mr-4">
                
              </div>
              <h2 className="text-xl font-bold text-gray-900">Meet The Founder</h2>
            </div>
            
            <div className="text-center">
              {/*Founder Photo*/}
              <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full overflow-hidden flex items-center justify-center">
  <img
    src="sammy2.jpeg"
    alt="SIgma BOyy"
    className="w-full h-full object-cover"
  />
</div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Saman Iqbal Ansari</h3>
              <p className="text-teal-600 font-medium mb-4">Founder & CEO</p>
              
              <div className="text-gray-700 text-sm leading-relaxed space-y-3">
                <p>
                  A passionate software developer and entrepreneur who founded Bankaroo with a vision to make personal finance management accessible to everyone.
                </p>
                
                <p>
                Born in Siliguri and raised across various states of India, he brings a rich and diverse perspective to everything he does. A sports enthusiast and tech lover, he completed his schooling at Army School, Kolkata and is now pursuing his BTech at Newton School of Technology. Driven to learn, build, and take on new challenges.</p>               
                <p>
                He wants to make money management feel simple and stress-free,giving people the tools they need to budget smarter,save better,and feel good doing it.
                </p>
                <p>DO WHAT EXCITES!!</p>
              </div>
              
              {/* Social Links */}
              <div className="flex justify-center space-x-4 mt-6">
                <a 
                  href="https://github.com/sammyiqbal" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-teal-600 transition-colors"
                >
                  <Github size={25} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/saman-iqbal-a-a60697304/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-teal-600 transition-colors"
                >
                  <Linkedin size={25} />
                </a>
                <a 
                  href="https://www.instagram.com/_saman_iqbal/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-teal-600 transition-colors"
                >
                  <Instagram size={25} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogPage;