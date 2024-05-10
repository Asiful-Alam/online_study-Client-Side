import  { useState, useEffect } from 'react';

const AllAssignment = () => {
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/assignments')
      .then(response => response.json())
      .then(data => setAssignments(data))
      .catch(error => console.error('Error fetching assignments:', error));
  }, []);

  return (
    <div>
      <h1>All Assignments</h1>
      <ul>
        {assignments.map(assignment => (
          <li key={assignment._id}>{assignment.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default AllAssignment;
