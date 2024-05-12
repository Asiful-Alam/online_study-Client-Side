import  { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";

const Submit = () => {
    
    const {user}=useContext(AuthContext);
    const {id} = useParams()
    const notify = () => toast("Wow so easy!");

    console.log(id)

  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");

  const handleInput1Change = (e) => {
    setInput1(e.target.value);
  };

  const handleInput2Change = (e) => {
    setInput2(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form=event.target;
    const email = user?.email;
    const data = form.data.value;
    const conclusion = form.conclusion.value;
    const assignment_id = id

    const addsubmitData={
        email,data,conclusion,assignment_id
    }
    console.log(addsubmitData);
    fetch("http://localhost:5000/mylist", {
      method: "POST",
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
      });

    
    setInput1("");
    setInput2("");
  };

  return (
    <div>
      <h3>Submit Form</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="input1">Input 1:</label>
          <input
            type="text"
            id="input1"
            name="data"
            value={input1}
            onChange={handleInput1Change}
          />
        </div>
        <div>
          <label htmlFor="input2" >Input 2:</label>
          <input
            type="text"
            id="input2"
            name="conclusion"
            value={input2}
            onChange={handleInput2Change}
          />
        </div>
        <button onClick={notify} type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none">submit</button>
      </form>
    </div>
  );
};

export default Submit;
