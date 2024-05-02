import React, { useState } from 'react';
import TransactionList from './TransactionList';
import TransactionForm from './TransactionForm';
import SearchBar from './SearchBar';

function App() {
  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);

  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  const deleteTransaction = (index) => {
    const updatedTransactions = [...transactions];
    updatedTransactions.splice(index, 1);
    setTransactions(updatedTransactions);
  };

  return (
    <div className="container">
      <h1>Welcome to the Bank of Flatiron</h1>
      <TransactionForm addTransaction={addTransaction} />
      <SearchBar setFilteredTransactions={setFilteredTransactions} transactions={transactions} />
      <TransactionList transactions={filteredTransactions.length > 0 ? filteredTransactions : transactions} deleteTransaction={deleteTransaction} />
    </div>
  );
}

export default App;