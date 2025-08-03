import React, { useState } from 'react';
import BookDetails from './BookDetails';
import BlogDetails from './BlogDetails';
import CourseDetails from './CourseDetails';

function App() {
  const [view, setView] = useState("books"); // default view

  const books = [
    { title: "React Basics", author: "Dan Abramov" },
    { title: "Learning JSX", author: "Sophia Smith" }
  ];

  const blogs = [
    { title: "React Conditional Rendering", summary: "Learn all ways to conditionally render content in React." },
    { title: "React Keys", summary: "Why are keys important in lists?" }
  ];

  const courses = [
    { name: "React 101", price: 1999 },
    { name: "Advanced React", price: 2999 }
  ];

  let renderedComponent;

  if (view === "books") {
    renderedComponent = <BookDetails books={books} />;
  } else if (view === "blogs") {
    renderedComponent = <BlogDetails blogs={blogs} />;
  } else {
    renderedComponent = <CourseDetails courses={courses} />;
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Blogger App</h1>

      {/* Conditional Buttons */}
      <div style={{ marginBottom: '20px' }}>
        <button onClick={() => setView("books")}>Show Books</button>
        <button onClick={() => setView("blogs")}>Show Blogs</button>
        <button onClick={() => setView("courses")}>Show Courses</button>
      </div>

      {renderedComponent}

      {view === "books" ? (
        <p>You're viewing Book List</p>
      ) : view === "blogs" ? (
        <p>You're viewing Blog Posts</p>
      ) : (
        <p>You're viewing Course List</p>
      )}
    </div>
  );
}

export default App;
