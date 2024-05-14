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
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    });
    if (result.isConfirmed) {
      try {
        const response = await fetch(`http://localhost:5000/mylist/${_id}`, {
          method: "DELETE"
        });
        if (response.ok) {
          setAssignments(assignments.filter((assignment) => assignment._id !== _id));
          setFilteredAssignments(filteredAssignments.filter((assignment) => assignment._id !== _id));
          Swal.fire(
            "Deleted!",
            "Your assignment has been deleted.",
            "success"
          );
        } else {
          console.error("Failed to delete assignment:", response.status);
          Swal.fire(
            "Error!",
            "Failed to delete assignment.",
            "error"
          );
        }
      } catch (error) {
        console.error("Error deleting assignment:", error);
        Swal.fire(
          "Error!",
          "Failed to delete assignment.",
          "error"
        );
      }
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-center text-3xl font-bold mb-8">My Assignment List</h2>
      <div className="overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2">Title</th>
              <th className="px-4 py-2">Description</th>
              <th className="px-4 py-2">Marks</th>
              <th className="px-4 py-2">Given Marks</th>
              <th className="px-4 py-2">Due Date</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {filteredAssignments.map((assignment, index) => (
              <tr key={assignment._id} className={`${index % 2 === 0 ? 'bg-blue-100' : 'bg-green-100'}`}>
                <td className="border px-4 py-2">{assignment.title}</td>
                <td className="border px-4 py-2">{assignment.description}</td>
                <td className="border px-4 py-2">{assignment.marks}</td>
                <td className="border px-4 py-2">{assignment.given_mark ? assignment.given_mark : "Still Pending"}</td>
                <td className="border px-4 py-2">{assignment.dueDate}</td>
                <td className="border px-4 py-2">
                  <button
                    onClick={() => handleDelete(assignment._id)}
                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-4 rounded mr-2"
                  >
                    Delete
                  </button>
                  <Link
                    to={`/update/${assignment._id}`}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-4 rounded"
                  >
                    Edit
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyList;