import React, { useState, useEffect } from "react";
import AssignmentCard from "../Component/AssignmentCard";
const AllAssignmentFeature = () => {
    const [assignments, setAssignments] = useState([]);
  
    useEffect(() => {
      fetchAssignments();
    }, []);
  
    const fetchAssignments = async () => {
      try {
        const response = await fetch('http://localhost:5000/all-list');
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
      <div>
        <div className="text-center mt-10">
          <h5 className="text-red-600 font-bold text-3xl mb-4">
            Explore Exciting Features
          </h5>
          <p className="text-gray-700 leading-relaxed mx-auto max-w-lg">
            Welcome to our feature-rich section! Here, you'll discover a plethora
            of tools designed to enhance your learning experience and expand your
            knowledge horizons. From interactive tutorials to insightful articles,
            our platform offers a diverse range of resources to cater to your
            learning needs.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-6 mt-10">
          {assignments.map(assignment => (
            <AssignmentCard key={assignment._id} assignment={assignment} />
          ))}
        </div>
      </div>
    );
  };
  
  export default AllAssignmentFeature;
  