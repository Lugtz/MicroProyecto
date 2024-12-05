import React, { useEffect, useState } from 'react';
import { getTasks } from '../services/taskService';
import TaskList from '../components/TaskList';
import { useNavigate } from 'react-router-dom';

const UserTasks: React.FC = () => {
    const [tasks, setTasks] = useState([]);
    const userId = '123'; // Esto debería venir del usuario autenticado
    const navigate = useNavigate();

    useEffect(() => {
        const fetchTasks = async () => {
            const data = await getTasks(userId);
            setTasks(data);
        };
        fetchTasks();
    }, [userId]);

    const handleAddTask = () => {
        navigate('/tasks/new');
    };

    return (
        <div>
            <h1>Mis Tareas</h1>
            <button onClick={handleAddTask}>Añadir Tarea</button>
            <TaskList tasks={tasks} />
        </div>
    );
};

export default UserTasks;
