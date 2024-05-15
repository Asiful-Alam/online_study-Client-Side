import { useState, useEffect } from "react";
import AssignmentCard from "../Component/AssignmentCard";

const AllAssignmentFeature = () => {
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    fetchAssignments();
  }, []);

  const fetchAssignments = async () => {
    try {
      const response = await fetch('https://online-study-server-delta.vercel.app/all-list');
      if (!response.ok) {
        throw new Error('Failed to fetch assignments');
      }
      const data = await response.json();
      setAssignments(data);
    } catch (error) {
      console.error('Error fetching assignments:', error);
    }
  };

  return (
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
      {assignments.map(assignment => (
        <AssignmentCard key={assignment._id} assignment={assignment} />
      ))}
    </div>
  );
};

export default AllAssignmentFeature;
