import React from 'react';
import './App.css';

function App() {
  const books = [
    { id: 101, bname: 'Master React', price: 670 },
    { id: 102, bname: 'Deep Dive into Angular 11', price: 800 },
    { id: 103, bname: 'Mongo Essentials', price: 450 },
  ];

  const blogs = [
    {
      title: 'React Learning',
      author: 'Stephen Biz',
      description: 'Welcome to learning React!',
    },
    {
      title: 'Installation',
      author: 'Schwezdenier',
      description: 'You can install React from npm.',
    },
  ];

  const courses = [
    { name: 'Angular', date: '4/5/2021' },
    { name: 'React', date: '6/3/2021' },
  ];

  return (
    <div className="container">
      <div className="column mystyle1">
        <h2>Course Details</h2>
        {courses.map((course, index) => (
          <div key={index}>
            <h3>{course.name}</h3>
            <p>{course.date}</p>
          </div>
        ))}
      </div>

      <div className="column st2">
        <h2>Book Details</h2>
        {books.map((book) => (
          <div key={book.id}>
            <h3>{book.bname}</h3>
            <h4>{book.price}</h4>
          </div>
        ))}
      </div>

      <div className="column v1">
        <h2>Blog Details</h2>
        {blogs.map((blog, index) => (
          <div key={index}>
            <h3>{blog.title}</h3>
            <p><strong>{blog.author}</strong></p>
            <p>{blog.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
