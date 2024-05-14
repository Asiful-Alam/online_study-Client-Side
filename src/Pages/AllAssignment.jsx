import  { useState, useEffect } from "react";
import AssignmentCard from "../Component/AssignmentCard";

const AllAssignment = () => {
  const [assignments, setAssignments] = useState([]);
  const [filteredAssignments, setFilteredAssignments] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    fetch('http://localhost:5000/assignment' )
      .then(response => response.json())
      .then(data => {
        setAssignments(data);
        setFilteredAssignments(data);
      })
      .catch(error => console.error('Error fetching assignments:', error));
  }, []);

  const handleFilterChange = (event) => {
    const selectedDifficulty = event.target.value;
    setFilter(selectedDifficulty);
    if (selectedDifficulty === "all") {
      setFilteredAssignments(assignments);
    } else {
      const filtered = assignments.filter(assignment => assignment.difficultyLevel === selectedDifficulty);
      setFilteredAssignments(filtered);
    }
  };

  return (
    <div>
      <h1 className="text-2xl text-red-800 text-center">All Assignments</h1>
      <div className="text-center mt-10">
        <label htmlFor="difficultyFilter">Filter by Difficulty Level: </label>
        <select id="difficultyFilter" value={filter} onChange={handleFilterChange}>
          <option value="all">All</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>
      <div className="grid grid-cols-3 gap-6 mt-10">
        {filteredAssignments.map(assignment => (
          <AssignmentCard key={assignment._id} assignment={assignment} />
        ))}
      </div>
    </div>
  );
};

export default AllAssignment;
