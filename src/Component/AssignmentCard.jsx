import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AssignmentCard = ({ assignment }) => {
  const handleDelete = async (_id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });
    if (result.isConfirmed) {
      try {
        const response = await fetch(
          `http://localhost:5000/assignment/${_id}`,
          {
            method: "DELETE",
          }
        );
        if (response.ok) {
          Swal.fire("Deleted!", "Your assignment has been deleted.", "success");
        } else {
          console.error("Failed to delete assignment:", response.status);
          Swal.fire("Error!", "Failed to delete assignment.", "error");
        }
      } catch (error) {
        console.error("Error deleting assignment:", error);
        Swal.fire("Error!", "Failed to delete assignment.", "error");
      }
    }
  };

  return (
    <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800">
      <div className="flex space-x-4">
        <img
          alt=""
          src={assignment.displayimage}
          className="object-cover w-12 h-12 rounded-full shadow bg-gray-500 dark:bg-gray-500"
        />
        <div className="flex flex-col space-y-1">
          <p className="text-sm font-semibold">{assignment.email}</p>
          <span className="text-xs text-gray-400 dark:text-gray-600">
            {assignment.date}
          </span>
        </div>
      </div>
      <div>
        <img
          src={assignment.thumbnailUrl}
          alt={assignment.title}
          className="object-cover w-full mb-4 h-60 sm:h-96 bg-gray-500 dark:bg-gray-500"
        />
        <h2 className="mb-1 text-xl font-semibold">{assignment.title}</h2>
        <p className="text-sm text-gray-400 dark:text-gray-600">
          {assignment.description}
        </p>
      </div>
      <div className="flex flex-wrap justify-between">
        <div className="space-x-2">
          <Link to={`/update/${assignment._id}`}>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-2 transition-colors duration-300 ease-in-out">
              Update
            </button>
          </Link>
          <button
            aria-label="Bookmark this post"
            type="button"
            className="p-2 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300 ease-in-out"
            onClick={() => handleDelete(assignment._id)}
          >
            Delete
          </button>
        </div>
        <Link to={`/details/${assignment._id}`}>
          <button className="p-2 text-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300 ease-in-out">
            View more
          </button>
        </Link>
      </div>
    </div>

   
  );
};

export default AssignmentCard;
