import { useEffect, useState } from 'react';
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
    <div>
      <div className="max-w-lg mx-auto mb-6">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden h-full" style={{ backgroundColor: '#9c892c' }}>
          <div className="relative">
            <img
              src={assignment.thumbnailUrl}
              alt={assignment.title}
              className="w-full h-64 object-cover object-center rounded-t-lg"
            />
            <div className="absolute top-0 left-0 bg-gray-800 bg-opacity-50 text-white px-2 py-1 rounded-br-lg">
              <span className="text-sm font-semibold">{assignment.difficultyLevel}</span>
            </div>
          </div>
          <div className="p-6">
            <h2 className="text-gray-900 font-bold text-xl mb-2">{assignment.title}</h2>
            <p className="text-gray-600 mb-4">{assignment.description}</p>
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="font-semibold text-gray-700">{assignment.email}</p>
                <p className="font-semibold text-gray-700">Marks: {assignment.marks}</p>
                <p className="font-semibold text-gray-700">Due Date: {assignment.dueDate}</p>
              </div>
            </div>
            <Link to={`/submit/${assignment._id}`}>
              <button>Take Assignment</button>
            </Link>
            <Link to="/mylist">
              <button onClick={notify} type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none">Add</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
