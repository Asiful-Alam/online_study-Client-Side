import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const MyList = () => {
  const { user } = useContext(AuthContext) || {};
  const [assignments, setAssignments] = useState([]);
  const [filteredAssignments, setFilteredAssignments] = useState([]);

  useEffect(() => {
    const fetchAssignments = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/mylist/${user?.email}`
        );
        if (response.ok) {
          const data = await response.json();
          setAssignments(data);
          setFilteredAssignments(data);
        } else {
          console.error("Failed to fetch assignments:", response.status);
        }
      } catch (error) {
        console.error("Error fetching assignments:", error);
      }
    };

    fetchAssignments();
  }, [user?.email]);

  const handleDelete = async (_id) => {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    });
    if (result.isConfirmed) {
      try {
        const response = await fetch(`http://localhost:5000/mylist/${_id}`, {
          method: 'DELETE'
        });
        if (response.ok) {
          setAssignments(assignments.filter(assignment => assignment._id !== _id));
          setFilteredAssignments(assignments.filter(assignment => assignment._id !== _id));
          Swal.fire(
            'Deleted!',
            'Your assignment has been deleted.',
            'success'
          );
        } else {
          console.error("Failed to delete assignment:", response.status);
          Swal.fire(
            'Error!',
            'Failed to delete assignment.',
            'error'
          );
        }
      } catch (error) {
        console.error("Error deleting assignment:", error);
        Swal.fire(
          'Error!',
          'Failed to delete assignment.',
          'error'
        );
      }
    }
  };

  return (
    <div className="my-10">
    
      <h2 className="text-center text-2xl font-lato font-bold mb-5">
        My Assignment List
      </h2>

     

      <div className="container mx-auto">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Title
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Description
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Marks
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Given Marks
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Due Date
                </th>
                <th className="px-6 py-3"></th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredAssignments.map((assignment) => (
                <tr key={assignment._id} className="hover:bg-gray-100">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{assignment.title}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{assignment.description}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{assignment.marks}</div>
                  </td>
                  
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{assignment.given_mark?assignment.given_mark:'Still Pending'}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{assignment.dueDate}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button onClick={() => handleDelete(assignment._id)} className="btn text-red-600 hover:text-red-900 mr-2">
                      Delete
                    </button>
                    <Link to={`/update/${assignment._id}`} className="text-indigo-600 hover:text-indigo-900">
                      Edit
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyList;
