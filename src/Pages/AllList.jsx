import { useEffect,useState } from "react";
import Swal from "sweetalert2";

const AllList = () => {
    const [pendingAssignments,setPendingAssignments] = useState([])
    const fetchAssignments = () =>{
        fetch('http://localhost:5000/all-list')
        .then(response => response.json())
        .then(data => {
          setPendingAssignments(data);
        })
        .catch(error => console.error('Error fetching assignments:', error));
    }
    useEffect(() => {
        fetchAssignments()
      }, []);
      const handleSubmit = (event,assignment_id) => {
        event.preventDefault();
        
        const given_mark=45
        const addsubmitData={
            assignment_id,
            given_mark
        }
        console.log(addsubmitData);
        fetch("http://localhost:5000/give-mark", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(addsubmitData),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.inserted) {
              Swal.fire({
                title: "Good job!",
                text: "You clicked the button!",
                icon: "success"
              });
            }
            fetchAssignments()

          });
    
        

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
                    Due Date
                  </th>
                  <th className="px-6 py-3"></th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {pendingAssignments.map((assignment) => (
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
                      <div className="text-sm text-gray-500">{assignment.dueDate}</div>
                    </td>
                    {assignment.type === "MARKED"?<td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button  className="btn text-green-600 hover:text-green-900 mr-2">
                        Completed
                      </button>
                     
                    </td>:
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button onClick={(e) => handleSubmit(e,assignment._id)} className="btn text-red-600 hover:text-red-900 mr-2">
                        Pending
                      </button>
                     
                    </td>
                    }
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
};

export default AllList;