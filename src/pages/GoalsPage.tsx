import React, { useState } from 'react';
import { Plus, Target, Calendar } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useData } from '../contexts/DataContext';
import { useAuth } from '../contexts/AuthContext';

const GoalsPage: React.FC = () => {
  const { goals, addGoal, updateGoal } = useData();
  const { user } = useAuth();
  const [showForm, setShowForm] = useState(false);
  const [selectedGoal, setSelectedGoal] = useState<string | null>(null);
  const [contributionAmount, setContributionAmount] = useState('');
  
  const [formData, setFormData] = useState({
    title: '',
    targetAmount: '',
    currentAmount: '',
    deadline: ''
  });

  const userGoals = goals.filter(g => g.userId === user?.id);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addGoal({
      ...formData,
      targetAmount: parseFloat(formData.targetAmount),
      currentAmount: parseFloat(formData.currentAmount) || 0
    });
    setFormData({
      title: '',
      targetAmount: '',
      currentAmount: '',
      deadline: ''
    });
    setShowForm(false);
  };

  const handleContribution = (goalId: string) => {
    if (contributionAmount) {
      updateGoal(goalId, parseFloat(contributionAmount));
      setContributionAmount('');
      setSelectedGoal(null);
    }
  };

  const activeGoals = userGoals.filter(g => g.status === 'active');
  const completedGoals = userGoals.filter(g => g.status === 'completed');

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Savings Goals</h1>
            <p className="text-gray-600 mt-2">Set and achieve your financial targets</p>
          </div>
          <button
            onClick={() => setShowForm(!showForm)}
            className="mt-4 sm:mt-0 bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors flex items-center"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Goal
          </button>
        </div>

        {/* Goal Creation Form */}
        {showForm && (
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h2 className="text-lg font-semibold mb-4">Create New Goal</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Goal Title
                  </label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({...formData, title: e.target.value})}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                    placeholder="e.g., Emergency Fund"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Target Amount
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    value={formData.targetAmount}
                    onChange={(e) => setFormData({...formData, targetAmount: e.target.value})}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                    placeholder="100000.00"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Current Amount (Optional)
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    value={formData.currentAmount}
                    onChange={(e) => setFormData({...formData, currentAmount: e.target.value})}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                    placeholder="0.00"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Target Date
                  </label>
                  <input
                    type="date"
                    value={formData.deadline}
                    onChange={(e) => setFormData({...formData, deadline: e.target.value})}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                    required
                  />
                </div>
              </div>
              
              <div className="flex space-x-4">
                <button
                  type="submit"
                  className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors"
                >
                  Create Goal
                </button>
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Active Goals */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Active Goals</h2>
          {activeGoals.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {activeGoals.map((goal) => (
                <div key={goal.id} className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-lg">{goal.title}</h3>
                    <Target className="h-5 w-5 text-teal-600" />
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>₹{goal.currentAmount.toFixed(2)}</span>
                      <span>₹{goal.targetAmount.toFixed(2)}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-teal-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${Math.min((goal.currentAmount / goal.targetAmount) * 100, 100)}%` }}
                      ></div>
                    </div>
                    <div className="text-center mt-2">
                      <span className="text-sm font-medium text-teal-600">
                        {Math.round((goal.currentAmount / goal.targetAmount) * 100)}% Complete
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-600 mb-4">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>Due: {goal.deadline}</span>
                  </div>
                  
                  <div className="space-y-2">
                    {selectedGoal === goal.id ? (
                      <div className="flex space-x-2">
                        <input
                          type="number"
                          step="0.01"
                          value={contributionAmount}
                          onChange={(e) => setContributionAmount(e.target.value)}
                          placeholder="Amount"
                          className="flex-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                        />
                        <button
                          onClick={() => handleContribution(goal.id)}
                          className="bg-teal-600 text-white px-3 py-2 rounded-lg hover:bg-teal-700 transition-colors"
                        >
                          Add
                        </button>
                        <button
                          onClick={() => setSelectedGoal(null)}
                          className="bg-gray-300 text-gray-700 px-3 py-2 rounded-lg hover:bg-gray-400 transition-colors"
                        >
                          Cancel
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => setSelectedGoal(goal.id)}
                        className="w-full bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-700 transition-colors flex items-center justify-center"
                      >
                       <span className="mr-2">₹</span>
                        Add Money
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <Target className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">No active goals yet</p>
              <button
                onClick={() => setShowForm(true)}
                className="mt-4 text-teal-600 hover:text-teal-700"
              >
                Create your first goal
              </button>
            </div>
          )}
        </div>

        {/* Completed Goals */}
        {completedGoals.length > 0 && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Completed Goals</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {completedGoals.map((goal) => (
                <div key={goal.id} className="bg-white rounded-lg shadow-md p-6 border-2 border-green-200">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-lg">{goal.title}</h3>
                    <div className="bg-green-100 p-2 rounded-full">
                      <Target className="h-5 w-5 text-green-600" />
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="w-full bg-green-200 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full w-full"></div>
                    </div>
                    <div className="text-center mt-2">
                      <span className="text-sm font-medium text-green-600">
                        🎉 Goal Achieved!
                      </span>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <p className="text-lg font-semibold text-green-600">
                     ₹{goal.currentAmount.toFixed(2)}
                    </p>
                   <p className="text-sm text-gray-600">Target: ₹{goal.targetAmount.toFixed(2)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default GoalsPage;