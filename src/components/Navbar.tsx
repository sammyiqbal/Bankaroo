import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { isAuthenticated, user, logout } = useAuth();

  const isActive = (path: string) => location.pathname === path;

  const handleLogout = () => {
    logout();
    setIsOpen(false);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-teal-500 font-bold text-2xl">₹</span>
            <span className="text-xl font-bold text-gray-900">Bankaroo</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`text-gray-700 hover:text-teal-600 transition-colors ${
                isActive('/') ? 'text-teal-600 font-medium' : ''
              }`}
            >
              Home
            </Link>
            
            {isAuthenticated && (
              <>
                <Link 
                  to="/dashboard" 
                  className={`text-gray-700 hover:text-teal-600 transition-colors ${
                    isActive('/dashboard') ? 'text-teal-600 font-medium' : ''
                  }`}
                >
                  Dashboard
                </Link>
                <Link 
                  to="/transactions" 
                  className={`text-gray-700 hover:text-teal-600 transition-colors ${
                    isActive('/transactions') ? 'text-teal-600 font-medium' : ''
                  }`}
                >
                  Transactions
                </Link>
                <Link 
                  to="/goals" 
                  className={`text-gray-700 hover:text-teal-600 transition-colors ${
                    isActive('/goals') ? 'text-teal-600 font-medium' : ''
                  }`}
                >
                  Goals
                </Link>
                <Link 
                  to="/blog" 
                  className={`text-gray-700 hover:text-teal-600 transition-colors ${
                    isActive('/blog') ? 'text-teal-600 font-medium' : ''
                  }`}
                >
                  Blog
                </Link>
              </>
            )}
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <span className="text-gray-700">Welcome, {user?.name}!</span>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
                >
                  Logout
                </button>
              </div>
            ) : (
              <>
                <Link 
                  to="/login" 
                  className="text-gray-700 hover:text-teal-600 transition-colors"
                >
                  Login
                </Link>
                <Link 
                  to="/signup" 
                  className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-teal-600 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link 
              to="/" 
              className={`block px-3 py-2 text-gray-700 hover:text-teal-600 transition-colors ${
                isActive('/') ? 'text-teal-600 font-medium' : ''
              }`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            
            {isAuthenticated && (
              <>
                <Link 
                  to="/dashboard" 
                  className={`block px-3 py-2 text-gray-700 hover:text-teal-600 transition-colors ${
                    isActive('/dashboard') ? 'text-teal-600 font-medium' : ''
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  Dashboard
                </Link>
                <Link 
                  to="/transactions" 
                  className={`block px-3 py-2 text-gray-700 hover:text-teal-600 transition-colors ${
                    isActive('/transactions') ? 'text-teal-600 font-medium' : ''
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  Transactions
                </Link>
                <Link 
                  to="/goals" 
                  className={`block px-3 py-2 text-gray-700 hover:text-teal-600 transition-colors ${
                    isActive('/goals') ? 'text-teal-600 font-medium' : ''
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  Goals
                </Link>
                <Link 
                  to="/blog" 
                  className={`block px-3 py-2 text-gray-700 hover:text-teal-600 transition-colors ${
                    isActive('/blog') ? 'text-teal-600 font-medium' : ''
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  Blog
                </Link>
              </>
            )}
            
            {isAuthenticated ? (
              <div className="px-3 py-2 space-y-2">
                <p className="text-gray-700">Welcome, {user?.name}!</p>
                <button
                  onClick={handleLogout}
                  className="w-full text-left bg-red-500 text-white px-3 py-2 rounded-lg hover:bg-red-600 transition-colors"
                >
                  Logout
                </button>
              </div>
            ) : (
              <>
                <Link 
                  to="/login" 
                  className="block px-3 py-2 text-gray-700 hover:text-teal-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </Link>
                <Link 
                  to="/signup" 
                  className="block px-3 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors mx-3"
                  onClick={() => setIsOpen(false)}
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;