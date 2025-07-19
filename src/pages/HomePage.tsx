import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, TrendingUp, Target, BarChart3, Download } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/*Hero Section*/}
      <section className="relative bg-gradient-to-r from-slate-900 to-slate-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Your Finance Made <span className="text-teal-400">Simple</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Smart, user-friendly financial management that helps you track income, manage expenses, and achieve your savings goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/signup"
                className="bg-teal-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-teal-700 transition-colors inline-flex items-center"
              >
                Get Started
                
              </Link>
              <Link
                to="/login"
                className="border border-white text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/*features section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Manage Your Finances
            </h2>
            <p className="text-xl text-gray-600">
              Powerful tools designed to help you take control of your financial future
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
              <div className="bg-teal-100 p-3 rounded-full w-fit mb-4">
                <BarChart3 className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Income & Expense Tracking</h3>
              <p className="text-gray-600">
                Easily categorize and track all your financial transactions in one place with intuitive charts and insights.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full w-fit mb-4">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Savings Goals</h3>
              <p className="text-gray-600">
                Set and achieve your financial goals with progress tracking and milestone celebrations.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
              <div className="bg-purple-100 p-3 rounded-full w-fit mb-4">
                <TrendingUp className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Spending Trends</h3>
              <p className="text-gray-600">
                Visualize your spending patterns with interactive charts and get insights into your habits.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
              <div className="bg-orange-100 p-3 rounded-full w-fit mb-4">
                <Download className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Data Export</h3>
              <p className="text-gray-600">
                Export your financial data to CSV format for further analysis or backup purposes.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
              <div className="bg-red-100 p-3 rounded-full w-fit mb-4">
                <Shield className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Secure & Private</h3>
              <p className="text-gray-600">
                Your financial data is stored securely with advanced encryption and privacy protection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* testimonials section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Users Say
            </h2>
            
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                <img
          src="ritika.jpeg"
          alt="julia fredz"
          className="w-full h-full object-cover rounded-full"
        />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">Julia Fredz</h4>
                  <p className="text-gray-600 text-sm">Small Business Owner</p>
                </div>
              </div>
              <p className="text-gray-700">
                "Bankaroo helped me organize my business finances and personal budget.The goal tracking feature is amazing!"
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <img
          src="mikeross.jpeg"
          alt="mikeross"
          className="w-full h-full object-cover rounded-full"
        />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">Mike Ross</h4>
                  <p className="text-gray-600 text-sm">SDE</p>
                </div>
              </div>
              <p className="text-gray-700">
                "Finally,a budgeting app that's actually smart! I've been using it for 4 months and saved ₹3000."
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <img
          src="sharique.jpeg"
          alt="Sharique"
          className="w-full h-full object-cover rounded-full"
        />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">Sharique Ali</h4>
                  <p className="text-gray-600 text-sm">Student</p>
                </div>
              </div>
              <p className="text-gray-700">
                "Highly recomended for a college student.Helps to manage money efficiently."
              </p>
            </div>
          </div>
        </div>
      </section>

      
      <section className="py-20 bg-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Take Control of Your Finances?
          </h2>
          <p className="text-xl mb-8">
             Thousands of users who've already transformed their financial lives with Bankaroo!
          </p>
          <Link
            to="/signup"
            className="bg-white text-teal-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
          >
            Start Your Journey
            
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
