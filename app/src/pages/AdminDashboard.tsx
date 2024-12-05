import React, { useEffect, useState } from 'react';
import { getTasks } from '../services/taskService';

const AdminDashboard: React.FC = () => {
    const [usersCount, setUsersCount] = useState(0);
    const [tasksCount, setTasksCount] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            // Simular llamadas a APIs para contar usuarios y tareas
            setUsersCount(10); // Cambiar a la lógica real
            setTasksCount(20); // Cambiar a la lógica real
        };
        fetchData();
    }, []);

    return (
        <div>
            <h1>Dashboard Administrador</h1>
            <p>Usuarios: {usersCount}</p>
            <p>Tareas Registradas: {tasksCount}</p>
        </div>
    );
};

export default AdminDashboard;
