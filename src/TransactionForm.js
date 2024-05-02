import React, { useState } from 'react';

function TransactionForm({ addTransaction }) {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!description || !amount || !category) {
      alert('Please fill out all fields.');
      return;
    }

    const newTransaction = {
      id: Math.random(), 
      description,
      amount: parseFloat(amount),
      category,
    };

    
    addTransaction(newTransaction);

    setDescription('');
    setAmount('');
    setCategory('');
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <h2>Add New Transaction</h2>
      <form onSubmit={handleSubmit} style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '5px' }}>
        <div style={{ marginBottom: '10px' }}>
          <label style={{ fontWeight: 'bold' }}>Description</label>
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={{ width: '100%', padding: '10px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '5px' }}
            type="text"
            placeholder="Enter description"
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label style={{ fontWeight: 'bold' }}>Amount</label>
          <input
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            style={{ width: '100%', padding: '10px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '5px' }}
            type="number"
            placeholder="Enter amount"
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label style={{ fontWeight: 'bold' }}>Category</label>
          <input
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            style={{ width: '100%', padding: '10px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '5px' }}
            type="text"
            placeholder="Enter category"
          />
        </div>
        <button
          style={{
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
          type="submit"
        >
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default TransactionForm;