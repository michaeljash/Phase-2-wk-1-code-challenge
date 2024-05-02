import React from 'react';

function SearchBar() {
  return (
    <div style={{ marginBottom: '20px' }}>
      <h2 style={{ marginBottom: '10px' }}>Search Transactions</h2>
      <input
        style={{
          width: '100%',
          padding: '10px',
          marginBottom: '10px',
          border: '1px solid #ccc',
          borderRadius: '5px',
        }}
        type="text"
        placeholder="Search by description"
      />
    </div>
  );
}

export default SearchBar;