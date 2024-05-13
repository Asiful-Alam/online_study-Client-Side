import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Update = () => {
    const { id } = useParams(); // Get the id parameter from the URL
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        marks: '',
        thumbnailUrl: '',
        difficultyLevel: '',
        dueDate: new Date(),
    });

    useEffect(() => {
        const fetchAssignment = async () => {
            try {
                const response = await fetch(`http://localhost:5000/assignment/${id}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch assignment data');
                }
                const data = await response.json();
                setFormData(data);
            } catch (error) {
                console.error('Error fetching assignment:', error);
                // Handle error (e.g., display error message)
            }
        };
        fetchAssignment();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleDateChange = (date) => {
        setFormData({
            ...formData,
            dueDate: date,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch(`http://localhost:5000/assignment/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (!response.ok) {
                throw new Error('Failed to update assignment');
            }
            Swal.fire({
                title: 'Success!',
                text: 'Assignment updated successfully',
                icon: 'success',
            });
        } catch (error) {
            console.error('Error updating assignment:', error);
            let errorMessage = 'Failed to update assignment';
            if (error instanceof SyntaxError) {
                errorMessage = 'Invalid JSON format in server response';
            }
            Swal.fire({
                title: 'Error!',
                text: errorMessage,
                icon: 'error',
            });
        }
    };

    return (
        <div className="max-w-xl mx-auto mt-8 p-8 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Update Assignment</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Title:</label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Description:</label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    ></textarea>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Marks:</label>
                    <input
                        type="number"
                        name="marks"
                        value={formData.marks}
                        onChange={handleChange}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Thumbnail Image URL:</label>
                    <input
                        type="text"
                        name="thumbnailUrl"
                        value={formData.thumbnailUrl}
                        onChange={handleChange}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Difficulty Level:</label>
                    <select
                        name="difficultyLevel"
                        value={formData.difficultyLevel}
                        onChange={handleChange}
                        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                    >
                        <option value="">Select Difficulty Level</option>
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Due Date:</label>
                    <DatePicker
                        selected={new Date(formData.dueDate)}
                        onChange={handleDateChange}
                        className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                </div>
                <button type="submit" className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Update
                </button>
            </form>
        </div>
    );
};

export default Update;
