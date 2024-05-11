import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const Details = () => {
 
  const { id } = useParams();
  const [assignment, setAssignment] = useState(null);
  const [submissionData, setSubmissionData] = useState({
    documentLink: '',
    note: ''
  });

  useEffect(() => {
    fetch(`http://localhost:5000/assignment/${id}`)
      .then(response => response.json())
      .then(data => {
        setAssignment(data);
      })
      .catch(error => console.error('Error fetching assignment details:', error));
  }, [id]);

  const handleSubmission = async () => {
    const { documentLink, note } = submissionData;
    try {
      // Send submission data to the server
      const response = await fetch(`http://localhost:5000/submit-assignment/${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          documentLink,
          note
        })
      });
      if (response.ok) {
        // Submission successful
        Swal.fire(
          'Success!',
          'Assignment submitted successfully.',
          'success'
        );
      } else {
        // Submission failed
        console.error("Failed to submit assignment:", response.status);
        Swal.fire(
          'Error!',
          'Failed to submit assignment.',
          'error'
        );
      }
    } catch (error) {
      console.error("Error submitting assignment:", error);
      Swal.fire(
        'Error!',
        'Failed to submit assignment.',
        'error'
      );
    }
   
  };



  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSubmissionData(prevState => ({
      ...prevState,
      [name]: value
    }));
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
            <button
        onClick={() =>
          Swal.fire({
            title: 'Submit Assignment',
            html: `
              <input type="text" name="documentLink" placeholder="Enter Document Link" class="swal2-input">
              <textarea name="note" placeholder="Enter Note (Optional)" class="swal2-textarea"></textarea>
            `,
            showCancelButton: true,
            confirmButtonText: 'Submit',
            preConfirm: () => {
              // Handle submission when the modal is confirmed
              handleSubmission();
            }
          })
        }
        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
      >
        Take Assignment
      </button>
          </div>
        </div>
      </div>
    </div>
     
    </div>
  );
};

export default Details;
