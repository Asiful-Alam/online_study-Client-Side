import { useState } from 'react';

const OnlineCourses = () => {
  const [showModal, setShowModal] = useState(false);

  const handleEnrollNow = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <div>
        <h2 className="text-red-500 font-bold text-3xl text-center mt-10">Courses</h2>
        <p className="text-gray-500 font-medium mb-10 mt-6 text-center">These are all programming-related courses that can boost your skills.</p>
      </div>
      <div className="flex flex-wrap justify-between ml-3 md:flex row-span-2">
        <div className="flex flex-col max-w-md mb-6">
          <div className="bg-gradient-to-r from-purple-400 to-pink-500 shadow-lg rounded-lg overflow-hidden">
            <img
              className="w-full h-64 object-cover object-center"
              src="https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg"
              alt="Course Image"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-white mb-2">
                Introduction to Node
              </h2>
              <p className="text-gray-200 mb-4">
                Learn the fundamentals of react.Lets explore this and leran this 
              </p>
              <p className="text-gray-300 mb-2">Instructor: John Doe</p>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Duration: 6 weeks</span>
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300 ease-in-out"
                  onClick={handleEnrollNow} // Connect this button to the modal
                >
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Add similar cards for other courses */}
        <div className="flex flex-col max-w-md mb-6">
          <div className="bg-gradient-to-r from-purple-400 to-pink-500 shadow-lg rounded-lg overflow-hidden">
            <img
              className="w-full h-64 object-cover object-center"
              src="https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Course Image"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Introduction to React 
              </h2>
              <p className="text-gray-600 mb-4">
                Explore the basics of Python programming language and its
                applications.
              </p>
              <p className="text-gray-700 mb-2">Instructor: Jane Smith</p>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Duration: 8 weeks</span>
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300 ease-in-out"
                  onClick={handleEnrollNow} // Connect this button to the modal
                >
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col max-w-md mb-6">
          <div className="bg-gradient-to-r from-purple-400 to-pink-500 shadow-lg rounded-lg overflow-hidden">
            <img
              className="w-full h-64 object-cover object-center"
              src="https://media.istockphoto.com/id/1284271878/photo/javascript-inscription-against-laptop-and-code-background-learn-javascript-programming.jpg?s=1024x1024&w=is&k=20&c=iGiUPCesPFZq06F0eE_I72w5Z7dW_LgUeciGmyONLcM="
              alt="Course Image"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Introduction to Data Science
              </h2>
              <p className="text-gray-600 mb-4">
              Learn the fundamentals of JavaScript programming language.
              </p>
              <p className="text-gray-700 mb-2">Instructor: Alex Johnson</p>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Duration: 10 weeks</span>
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300 ease-in-out"
                  onClick={handleEnrollNow} // Connect this button to the modal
                >
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col max-w-md mb-6">
          <div className="bg-gradient-to-r from-purple-400 to-pink-500 shadow-lg rounded-lg overflow-hidden">
            <img
              className="w-full h-64 object-cover object-center"
              src="https://images.pexels.com/photos/4383298/pexels-photo-4383298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Course Image"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Web Development Bootcamp
              </h2>
              <p className="text-gray-600 mb-4">
                Gain hands-on experience in web development technologies such as
                HTML, CSS, and JavaScript.
              </p>
              <p className="text-gray-700 mb-2">Instructor: Michael Brown</p>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Duration: 12 weeks</span>
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300 ease-in-out"
                  onClick={handleEnrollNow} // Connect this button to the modal
                >
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Enrollment Successful!</h2>
            <p className="text-gray-600">You have successfully enrolled in the course.</p>
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4"
              onClick={handleCloseModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default OnlineCourses;
