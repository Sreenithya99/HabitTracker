import React, { useState } from 'react';
import './AddHabitModal.css';

const AddHabitModal = ({ isOpen, onClose }) => {
    const [habitName, setHabitName] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('Productivity');
    const [frequency, setFrequency] = useState('Daily');

    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        const newHabit = { habitName, description, category, frequency };
        console.log('New Habit:', newHabit);

        // Clear form inputs
        setHabitName('');
        setDescription('');
        setCategory('Productivity');
        setFrequency('Daily');

        // Close modal
        onClose();
    };

    return (
        <div className="modal-overlay">
            <div className="modal">
                <div className="modal-header">
                    <h2>Add New Habit</h2>
                    <button className="close-button" onClick={onClose}>✖</button>
                </div>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        placeholder="Exercise, Read, Meditate..." 
                        value={habitName}
                        onChange={(e) => setHabitName(e.target.value)}
                        required 
                    />

                    <textarea 
                        placeholder="Any details about your habit..." 
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />

                    <div className="form-row">
                        <div>
                            <label>Category</label>
                            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                                <option>Productivity</option>
                                <option>Health</option>
                                <option>Learning</option>
                                <option>Well-being</option>
                            </select>
                        </div>
                        
                        <div>
                            <label>Frequency</label>
                            <select value={frequency} onChange={(e) => setFrequency(e.target.value)}>
                                <option>Daily</option>
                                <option>Weekly</option>
                                <option>Monthly</option>
                            </select>
                        </div>
                    </div>

                    <button type="submit" className="add-habit-button">Add Habit</button>
                </form>
            </div>
        </div>
    );
};

export default AddHabitModal;
