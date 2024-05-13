import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";

const Submit = () => {
    const { user } = useContext(AuthContext);
    const { id } = useParams();
    const [input1, setInput1] = useState("");
    const [input2, setInput2] = useState("");

    const notify = () => toast("Submission successful!");

    const handleInput1Change = (e) => {
        setInput1(e.target.value);
    };

    const handleInput2Change = (e) => {
        setInput2(e.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.target;
        const email = user?.email;
        const data = form.data.value;
        const conclusion = form.conclusion.value;
        const assignment_id = id;

        const addsubmitData = {
            email,
            data,
            conclusion,
            assignment_id,
        };

        try {
            const response = await fetch("http://localhost:5000/mylist", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(addsubmitData),
            });
            const responseData = await response.json();
            console.log(responseData);
            if (responseData.inserted) {
                Swal.fire({
                    title: "Good job!",
                    text: "Submission successful!",
                    icon: "success",
                });
                notify();
            }
        } catch (error) {
            console.error("Error:", error);
        }

        setInput1("");
        setInput2("");
    };

    return (
        <div className="max-w-md mx-auto mt-8 p-8 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Submit Form</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="input1" className="block text-lg font-medium mb-1">
                        Input 1:
                    </label>
                    <input
                        type="text"
                        id="input1"
                        name="data"
                        value={input1}
                        onChange={handleInput1Change}
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    />
                </div>
                <div>
                    <label htmlFor="input2" className="block text-lg font-medium mb-1">
                        Input 2:
                    </label>
                    <input
                        type="text"
                        id="input2"
                        name="conclusion"
                        value={input2}
                        onChange={handleInput2Change}
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 focus:outline-none"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Submit;
