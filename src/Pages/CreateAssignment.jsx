// import { useState, useContext } from "react";
// import Swal from "sweetalert2";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { AuthContext } from "../Provider/AuthProvider";

// const CreateAssignment = () => {
//   const { user } = useContext(AuthContext);
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [marks, setMarks] = useState("");
//   const [thumbnailUrl, setThumbnailUrl] = useState("");
//   const [difficultyLevel, setDifficultyLevel] = useState("");
//   const [dueDate, setDueDate] = useState(new Date());

//   const notify = () => toast("Assignment created successfully!");

//   // Inside CreateAssignment component

// const handleSubmit = async (event) => {
//   event.preventDefault();
//   const assignmentData = {
//     name: user?.displayName,
//     email: user?.email,
//     title,
//     description,
//     marks,
//     thumbnailUrl,
//     difficultyLevel,
//     dueDate,
//   };

//   try {
//     const response = await fetch("https://online-study-server-delta.vercel.app/assignment", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(assignmentData),
//     });
//     const data = await response.json();
//     console.log(data);
//     if (data.inserted) {
//       Swal.fire({
//         title: "Good job!",
//         text: "Assignment created successfully!",
//         icon: "success",
//       });
//       notify();
//     }
//   } catch (error) {
//     console.error("Error creating assignment:", error);
//   }
// };


//   return (
//     <div className="max-w-md mx-auto mt-8">
//       <div className="bg-white shadow-md rounded px-8 py-6">
//         <h2 className="text-2xl font-semibold mb-4 text-center">
//           Create Assignment
//         </h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label htmlFor="title" className="block mb-1">
//               Title:
//             </label>
//             <input
//               type="text"
//               id="title"
//               name="title"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500"
//               required
//             />
//           </div>
//           <div>
//             <label htmlFor="description" className="block mb-1">
//               Description:
//             </label>
//             <textarea
//               id="description"
//               name="description"
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//               className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500"
//               required
//             ></textarea>
//           </div>
//           <div>
//             <label htmlFor="marks" className="block mb-1">
//               Marks:
//             </label>
//             <input
//               type="number"
//               id="marks"
//               name="marks"
//               value={marks}
//               onChange={(e) => setMarks(e.target.value)}
//               className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500"
//               required
//             />
//           </div>
//           <div>
//             <label htmlFor="thumbnailUrl" className="block mb-1">
//               Thumbnail Image URL:
//             </label>
//             <input
//               type="text"
//               id="thumbnailUrl"
//               name="thumbnailUrl"
//               value={thumbnailUrl}
//               onChange={(e) => setThumbnailUrl(e.target.value)}
//               className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500"
//               required
//             />
//           </div>
//           <div>
//             <label htmlFor="difficultyLevel" className="block mb-1">
//               Difficulty Level:
//             </label>
//             <select
//               id="difficultyLevel"
//               name="difficultyLevel"
//               value={difficultyLevel}
//               onChange={(e) => setDifficultyLevel(e.target.value)}
//               className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500"
//               required
//             >
//               <option value="">Select Difficulty Level</option>
//               <option value="easy">Easy</option>
//               <option value="medium">Medium</option>
//               <option value="hard">Hard</option>
//             </select>
//           </div>
//           <div>
//             <label htmlFor="dueDate" className="block mb-1">
//               Due Date:
//             </label>
//             <DatePicker
//               id="dueDate"
//               selected={dueDate}
//               onChange={(date) => setDueDate(date)}
//               className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500"
//               required
//             />
//           </div>
//           <div>
//             <button onClick={notify}
//               type="submit"
//               className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none"
//             >
//               Create
//             </button>
//           </div>
//           <ToastContainer />
//         </form>
//       </div>
//     </div>
//   );
// };

// export default CreateAssignment;
import { useState, useContext } from "react";
import Swal from "sweetalert2";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../Provider/AuthProvider";

const CreateAssignment = () => {
  const { user } = useContext(AuthContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [marks, setMarks] = useState("");
  const [thumbnailUrl, setThumbnailUrl] = useState("");
  const [difficultyLevel, setDifficultyLevel] = useState("");
  const [dueDate, setDueDate] = useState(new Date());
  const [brandName, setBrandName] = useState("");
  const [price, setPrice] = useState("");
  const [categoryName, setCategoryName] = useState("");

  const notify = () => toast("Assignment created successfully!");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const assignmentData = {
      name: user?.displayName,
      email: user?.email,
      thumbnailUrl,
      dueDate,
      brandName,
      price,
      categoryName,
    };
 
    console.log("Sending data:", assignmentData);
 
    try {
       const response = await fetch("https://online-study-server-delta.vercel.app/assignment", {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify(assignmentData),
       });
       const data = await response.json();
       console.log("Received response:", data);
       if (data.inserted) {
         Swal.fire({
           title: "Good job!",
           text: "Assignment created successfully!",
           icon: "success",
         });
         notify();
       }
    } catch (error) {
       console.error("Error creating assignment:", error);
    }
 };
 
  return (
    <div className="max-w-md mx-auto mt-8">
      <div className="bg-white shadow-md rounded px-8 py-6">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Create product
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
        
          <div>
            <label htmlFor="thumbnailUrl" className="block mb-1">
              Thumbnail Image URL:
            </label>
            <input
              type="text"
              id="thumbnailUrl"
              name="thumbnailUrl"
              value={thumbnailUrl}
              onChange={(e) => setThumbnailUrl(e.target.value)}
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="dueDate" className="block mb-1">
              Create Date:
            </label>
            <DatePicker
              id="dueDate"
              selected={dueDate}
              onChange={(date) => setDueDate(date)}
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="brandName" className="block mb-1">
              Brand Name:
            </label>
            <input
              type="text"
              id="brandName"
              name="brandName"
              value={brandName}
              onChange={(e) => setBrandName(e.target.value)}
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="price" className="block mb-1">
              Price:
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="categoryName" className="block mb-1">
              Category Name:
            </label>
            <input
              type="text"
              id="categoryName"
              name="categoryName"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div>
            <button
              onClick={notify}
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
  );
};

export default CreateAssignment;
