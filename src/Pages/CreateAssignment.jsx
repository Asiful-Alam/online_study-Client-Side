import React, { useContext, useState } from "react";
import Swal from "sweetalert2";
import DatePicker from "react-datepicker";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../Provider/AuthProvider";

const CreateAssignment = () => {
  const { user } = useContext(AuthContext);
  const [dueDate, setDueDate] = useState(new Date());
  const [difficultyLevel, setDifficultyLevel] = useState("");
  const notify = () => toast("Assignment created successfully!");

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = user?.displayName;
    const email = user?.email;

    const assignmentData = {
      name,
      email,
      title: form.title.value,
      description: form.description.value,
      marks: form.marks.value,
      thumbnailUrl: form.thumbnailUrl.value,
      difficultyLevel,
      dueDate,
    };
    console.log(assignmentData);

    fetch("https://travel-taupe-omega.vercel.app/assignments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(assignmentData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.inserted) {
          Swal.fire({
            title: "Good job!",
            text: "Assignment created successfully!",
            icon: "success",
          });
          notify();
        }
      });
  };

  return (
    <div>
      <div className="max-w-md mx-auto mt-8 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-8 rounded-lg">
        <div className="bg-white shadow-md rounded px-8 py-6">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Create Assignment
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="title" className="block mb-1">
                Title:
              </label>
              <input
                type="text"
                id="title"
                name="title"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="description" className="block mb-1">
                Description:
              </label>
              <textarea
                id="description"
                name="description"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500"
              ></textarea>
            </div>
            <div>
              <label htmlFor="marks" className="block mb-1">
                Marks:
              </label>
              <input
                type="text"
                id="marks"
                name="marks"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="thumbnailUrl" className="block mb-1">
                Thumbnail Image URL:
              </label>
              <input
                type="text"
                id="thumbnailUrl"
                name="thumbnailUrl"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="difficultyLevel" className="block mb-1">
                Difficulty Level:
              </label>
              <select
                id="difficultyLevel"
                name="difficultyLevel"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500"
                value={difficultyLevel}
                onChange={(e) => setDifficultyLevel(e.target.value)}
              >
                <option value="">Select Difficulty Level</option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
            </div>
            <div>
              <label htmlFor="dueDate" className="block mb-1">
                Due Date:
              </label>
              <DatePicker
                id="dueDate"
                selected={dueDate}
                onChange={(date) => setDueDate(date)}
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none"
              >
                Create
              </button>
            </div>
            <ToastContainer />
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateAssignment;
