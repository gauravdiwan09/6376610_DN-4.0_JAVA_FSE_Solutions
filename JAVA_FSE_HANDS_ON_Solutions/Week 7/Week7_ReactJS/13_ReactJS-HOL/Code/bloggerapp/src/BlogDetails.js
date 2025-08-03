import React from 'react';

const BlogDetails = ({ blogs }) => {
  return (
    <div>
      <h2>Blog Posts</h2>
      {blogs.map((blog, index) => (
        <div key={index} style={{ marginBottom: '10px' }}>
          <h4>{blog.title}</h4>
          <p>{blog.summary}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogDetails;
