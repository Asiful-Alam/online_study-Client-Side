import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const Details = () => {
  const notify = () => toast("Wow so easy!");
  const { id } = useParams();
  const [assignment, setAssignment] = useState(null);

  useEffect(() => {
    fetchAssignmentDetails(id);
  }, [id]);

  const fetchAssignmentDetails = async (_id) => {
    try {
      const response = await fetch(`http://localhost:5000/assignment/${_id}`);
      if (!response.ok) {
        throw new Error('Failed to fetch assignment details');
      }
      const data = await response.json();
      setAssignment(data);
    } catch (error) {
      console.error('Error fetching assignment details:', error);
    }
  };

  if (!assignment) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto mt-8">
      <div className="max-w-lg mx-auto">
        <div className="bg-white rounded-lg overflow-hidden shadow-lg">
          <img
            src={assignment.thumbnailUrl}
            alt={assignment.title}
            className="w-full h-64 object-cover object-center"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{assignment.title}</div>
            <p className="text-gray-700 text-base">{assignment.description}</p>
            <div className="mt-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-700 font-semibold">Difficulty: {assignment.difficultyLevel}</p>
                  <p className="text-gray-700 font-semibold">Marks: {assignment.marks}</p>
                  <p className="text-gray-700 font-semibold">Due Date: {assignment.dueDate}</p>
                </div>
                <Link to={`/submit/${assignment._id}`}>
                  <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                    Take Assignment
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
