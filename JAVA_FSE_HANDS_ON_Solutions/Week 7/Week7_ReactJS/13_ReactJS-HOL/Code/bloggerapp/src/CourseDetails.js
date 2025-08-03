import React from 'react';

const CourseDetails = ({ courses }) => {
  return (
    <div>
      <h2>Courses</h2>
      <ul>
        {courses.map((course, index) => (
          <li key={index}>
            <strong>{course.name}</strong> - ₹{course.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseDetails;
