import React from 'react';

function TransactionTable() {

  const transactions = [
    { id: 1, description: 'Groceries', amount: 50.00, category: 'Food' },
    { id: 2, description: 'Gas', amount: 30.00, category: 'Transportation' },
    
  ];

  return (
    <div style={{ marginBottom: '20px' }}>
      <h2 style={{ marginBottom: '10px' }}>Transactions</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ccc', padding: '10px', backgroundColor: '#f2f2f2', fontWeight: 'bold', textAlign: 'left' }}>
              Description
            </th>
            <th style={{ border: '1px solid #ccc', padding: '10px', backgroundColor: '#f2f2f2', fontWeight: 'bold', textAlign: 'left' }}>
              Amount
            </th>
            <th style={{ border: '1px solid #ccc', padding: '10px', backgroundColor: '#f2f2f2', fontWeight: 'bold', textAlign: 'left' }}>
              Category
            </th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td style={{ border: '1px solid #ccc', padding: '10px', textAlign: 'left' }}>{transaction.description}</td>
              <td style={{ border: '1px solid #ccc', padding: '10px', textAlign: 'left' }}>${transaction.amount.toFixed(2)}</td>
              <td style={{ border: '1px solid #ccc', padding: '10px', textAlign: 'left' }}>{transaction.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionTable;