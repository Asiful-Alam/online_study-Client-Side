import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const AssignmentCard = ({ assignment }) => {
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
        const response = await fetch(`http://localhost:5000/assignment/${_id}`, {
          method: 'DELETE'
        });
        if (response.ok) {
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
          <div className="absolute top-0 right-0 mt-2 mr-2">
            <button
              onClick={() => handleDelete(assignment._id)}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300 ease-in-out"
            >
              Delete
            </button>
          </div>
        </div>
        <div className="p-6">
          <h2 className="text-gray-900 font-bold text-xl mb-2">{assignment.title}</h2>
          <p className="text-gray-600 mb-4">{assignment.description}</p>
          <div className="flex items-center">
            <img
              className="object-cover h-10 rounded-full"
              src={assignment.displayimage} // Use the correct field name for the user's display image
              alt="Avatar"
            />
            <div className="ml-2">
              <p className="font-semibold text-gray-700">
                {assignment.email}
              </p>
            </div>
          </div>
          <div className="flex justify-between items-center mt-4">
            <div className="text-gray-700">
              <p className="font-semibold">
                <span className="text-gray-600 font-bold">Marks:</span> {assignment.marks}
              </p>
              <p className="font-semibold">
                <span className="text-gray-600">Due Date:</span> {assignment.dueDate}
              </p>
            </div>
            <div className='flex flex-row gap-5'>
              <div>
              <Link to={`/update/${assignment._id}`}>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-2 transition-colors duration-300 ease-in-out">
                  Update
                </button>
              </Link>
              </div>
              <div>
              <Link to={`/details/${assignment._id}`}>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300 ease-in-out">
                  View more
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

export default AssignmentCard;
