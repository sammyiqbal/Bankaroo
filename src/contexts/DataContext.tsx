import React, { createContext, useContext, useState, useEffect } from 'react';

interface Transaction {
  id: string;
  type: 'income' | 'expense';
  amount: number;
  category: string;
  description: string;
  date: string;
  userId: string;
}

interface Goal {
  id: string;
  title: string;
  targetAmount: number;
  currentAmount: number;
  deadline: string;
  userId: string;
  status: 'active' | 'completed' | 'missed';
}

interface DataContextType {
  transactions: Transaction[];
  goals: Goal[];
  addTransaction: (transaction: Omit<Transaction, 'id' | 'userId'>) => void;
  addGoal: (goal: Omit<Goal, 'id' | 'userId' | 'status'>) => void;
  updateGoal: (goalId: string, amount: number) => void;
  deleteTransaction: (id: string) => void;
  getTotalIncome: () => number;
  getTotalExpenses: () => number;
  getBalance: () => number;
  exportToCSV: () => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const useData = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [goals, setGoals] = useState<Goal[]>([]);

  useEffect(() => {
    const savedTransactions = localStorage.getItem('bankaroo_transactions');
    const savedGoals = localStorage.getItem('bankaroo_goals');
    
    if (savedTransactions) {
      setTransactions(JSON.parse(savedTransactions));
    }
    if (savedGoals) {
      setGoals(JSON.parse(savedGoals));
    }
  }, []);

  const addTransaction = (transaction: Omit<Transaction, 'id' | 'userId'>) => {
    const user = JSON.parse(localStorage.getItem('bankaroo_user') || '{}');
    const newTransaction: Transaction = {
      ...transaction,
      id: Date.now().toString(),
      userId: user.id
    };
    
    const updatedTransactions = [...transactions, newTransaction];
    setTransactions(updatedTransactions);
    localStorage.setItem('bankaroo_transactions', JSON.stringify(updatedTransactions));
  };

  const addGoal = (goal: Omit<Goal, 'id' | 'userId' | 'status'>) => {
    const user = JSON.parse(localStorage.getItem('bankaroo_user') || '{}');
    const newGoal: Goal = {
      ...goal,
      id: Date.now().toString(),
      userId: user.id,
      status: 'active'
    };
    
    const updatedGoals = [...goals, newGoal];
    setGoals(updatedGoals);
    localStorage.setItem('bankaroo_goals', JSON.stringify(updatedGoals));
  };

  const updateGoal = (goalId: string, amount: number) => {
    const updatedGoals = goals.map(goal => {
      if (goal.id === goalId) {
        const newAmount = goal.currentAmount + amount;
        return {
          ...goal,
          currentAmount: newAmount,
          status: newAmount >= goal.targetAmount ? 'completed' : 'active'
        };
      }
      return goal;
    });
    
    setGoals(updatedGoals);
    localStorage.setItem('bankaroo_goals', JSON.stringify(updatedGoals));
  };

  const deleteTransaction = (id: string) => {
    const updatedTransactions = transactions.filter(t => t.id !== id);
    setTransactions(updatedTransactions);
    localStorage.setItem('bankaroo_transactions', JSON.stringify(updatedTransactions));
  };

  const getTotalIncome = () => {
    const user = JSON.parse(localStorage.getItem('bankaroo_user') || '{}');
    return transactions
      .filter(t => t.type === 'income' && t.userId === user.id)
      .reduce((sum, t) => sum + t.amount, 0);
  };

  const getTotalExpenses = () => {
    const user = JSON.parse(localStorage.getItem('bankaroo_user') || '{}');
    return transactions
      .filter(t => t.type === 'expense' && t.userId === user.id)
      .reduce((sum, t) => sum + t.amount, 0);
  };

  const getBalance = () => {
    return getTotalIncome() - getTotalExpenses();
  };

  const exportToCSV = () => {
    const user = JSON.parse(localStorage.getItem('bankaroo_user') || '{}');
    const userTransactions = transactions.filter(t => t.userId === user.id);
    
    const csvContent = [
      ['Date', 'Type', 'Category', 'Description', 'Amount'],
      ...userTransactions.map(t => [
        t.date,
        t.type,
        t.category,
        t.description,
        t.amount.toString()
      ])
    ].map(row => row.join(',')).join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'bankaroo_transactions.csv';
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const value = {
    transactions,
    goals,
    addTransaction,
    addGoal,
    updateGoal,
    deleteTransaction,
    getTotalIncome,
    getTotalExpenses,
    getBalance,
    exportToCSV
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};