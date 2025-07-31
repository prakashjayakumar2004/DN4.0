import React from 'react';

function BookDetails() {
  const books = [
    { id: 101, bname: 'Master React', price: 670 },
    { id: 102, bname: 'Deep Dive into Angular 11', price: 800 },
    { id: 103, bname: 'Mongo Essentials', price: 450 }
  ];

  return (
    <div style={{ borderRight: '4px solid green', padding: '20px' }}>
      <h2>Book Details</h2>
      {books.map(book => (
        <div key={book.id}>
          <h4>{book.bname}</h4>
          <p>{book.price}</p>
        </div>
      ))}
    </div>
  );
}

export default BookDetails;
