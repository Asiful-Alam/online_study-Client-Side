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
        <div>
            <h2>Update Assignment</h2>
            <form onSubmit={handleSubmit}>
                <label>Title:</label>
                <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                />
                <label>Description:</label>
                <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                ></textarea>
                <label>Marks:</label>
                <input
                    type="number"
                    name="marks"
                    value={formData.marks}
                    onChange={handleChange}
                />
                <label>Thumbnail Image URL:</label>
                <input
                    type="text"
                    name="thumbnailUrl"
                    value={formData.thumbnailUrl}
                    onChange={handleChange}
                />
                <label>Difficulty Level:</label>
                <select
                    name="difficultyLevel"
                    value={formData.difficultyLevel}
                    onChange={handleChange}
                >
                    <option value="">Select Difficulty Level</option>
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </select>
                <label>Due Date:</label>
                <DatePicker
                    selected={new Date(formData.dueDate)}
                    onChange={handleDateChange}
                />
                <button type="submit">Update</button>
            </form>
        </div>
    );
};

export default Update;
