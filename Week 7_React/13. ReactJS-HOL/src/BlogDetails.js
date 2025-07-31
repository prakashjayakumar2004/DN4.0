import React from 'react';

function BlogDetails() {
  const blogs = [
    {
      id: 1,
      title: 'React Learning',
      author: 'Stephen Biz',
      content: 'Welcome to learning React!'
    },
    {
      id: 2,
      title: 'Installation',
      author: 'Schwezdenier',
      content: 'You can install React from npm.'
    }
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h2>Blog Details</h2>
      {blogs.map(blog => (
        <div key={blog.id}>
          <h3>{blog.title}</h3>
          <h5>{blog.author}</h5>
          <p>{blog.content}</p>
        </div>
      ))}
    </div>
  );
}

export default BlogDetails;
