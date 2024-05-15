import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";

const Submit = () => {
    const { user } = useContext(AuthContext);
    const { id } = useParams();
    const [pdfLink, setPdfLink] = useState("");
    const [note, setNote] = useState("");

    const notify = () => toast("Submission successful!");

    const handlePdfLinkChange = (e) => {
        setPdfLink(e.target.value);
    };

    const handleNoteChange = (e) => {
        setNote(e.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.target;
        const email = user?.email;
        const pdfLink = form.pdfLink.value;
        const note = form.note.value;
        const assignment_id = id;

        const submissionData = {
            email,
            pdfLink,
            note,
            assignment_id,
        };

        try {
            const response = await fetch("http://localhost:5000/mylist", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(submissionData),
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

        setPdfLink("");
        setNote("");
    };

    return (
        <div className="max-w-md mx-auto mt-8 p-8 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Submit Form</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="pdfLink" className="block text-lg font-medium mb-1">
                        PDF/Doc Link:
                    </label>
                    <input
                        type="text"
                        id="pdfLink"
                        name="pdfLink"
                        value={pdfLink}
                        onChange={handlePdfLinkChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    />
                </div>
                <div>
                    <label htmlFor="note" className="block text-lg font-medium mb-1">
                        Quick Note:
                    </label>
                    <textarea
                        id="note"
                        name="note"
                        value={note}
                        onChange={handleNoteChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                        rows="4"
                    ></textarea>
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
