import React, { useState } from 'react';

const TaskForm: React.FC = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [status, setStatus] = useState('pending');

    const handleSubmit = () => {
        alert(`Tarea creada: ${title}`);
        // Aquí se conectaría con el servicio para crear la tarea
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Título"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                placeholder="Descripción"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <input
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
            />
            <select value={status} onChange={(e) => setStatus(e.target.value)}>
                <option value="pending">Pendiente</option>
                <option value="completed">Completada</option>
            </select>
            <button type="submit">Guardar</button>
        </form>
    );
};

export default TaskForm;
