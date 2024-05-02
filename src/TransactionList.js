import React from 'react';
import Transaction from './Transaction';

function TransactionList({ transactions, deleteTransaction }) {
  const handleDelete = (index) => {
    deleteTransaction(index);
  };

  return (
    <div>
      <h2>Transactions</h2>
      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Action</th> 
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <Transaction key={index} transaction={transaction}>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </Transaction>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionList;