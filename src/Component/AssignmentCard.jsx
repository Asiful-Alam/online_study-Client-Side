
import Swal from 'sweetalert2';

const AssignmentCard = ({ assignment }) => {
  // const { _id, title, description, marks, thumbnailUrl, difficultyLevel, dueDate } = assignment;

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
          // setassignments(assignments.filter(assignment => assignment._id !== _id));
          // setFilteredLocation(assignments.filter(assignment => assignment._id !== _id));
          Swal.fire(
            'Deleted!',
            'Your location has been deleted.',
            'success'
          );
        } else {
          console.error("Failed to delete location:", response.status);
          Swal.fire(
            'Error!',
            'Failed to delete location.',
            'error'
          );
        }
      } catch (error) {
        console.error("Error deleting location:", error);
        Swal.fire(
          'Error!',
          'Failed to delete location.',
          'error'
        );
      }
    }
  };


  return (
    <div className="max-w-lg mx-auto mb-6">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden h-full">
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
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
            >
              Delete
            </button>
          </div>
        </div>
        <div className="p-6">
          <h2 className="text-gray-900 font-bold text-xl mb-2">{assignment.title}</h2>
          <p className="text-gray-600 mb-4">{assignment.description}</p>
          <div className="flex justify-between items-center">
            <div className="text-gray-700">
              <p className="font-semibold">
                <span className="text-gray-600 font-bold">Marks:</span> {assignment.marks}
              </p>
              <p className="font-semibold">
                <span className="text-gray-600">Due Date:</span> {assignment.dueDate}
              </p>
            </div>
            <div>
              <button
                // onClick={() => onUpdate(assignment._id)}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-2"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignmentCard;
