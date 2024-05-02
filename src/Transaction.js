import React from 'react';

function Transaction({ transaction, children }) {
  return (
    <tr>
      <td>{transaction.description}</td>
      <td>{transaction.amount}</td>
      <td>{transaction.category}</td>
      <td>{children}</td> 
    </tr>
  );
}

export default Transaction;