import React from 'react';

interface Task {
    _id: string;
    title: string;
    description: string;
    dueDate: string;
    status: string;
}

interface Props {
    tasks: Task[];
}

const TaskList: React.FC<Props> = ({ tasks }) => {
    return (
        <ul>
            {tasks.map((task) => (
                <li key={task._id}>
                    <h3>{task.title}</h3>
                    <p>{task.description}</p>
                    <p>Fecha de vencimiento: {new Date(task.dueDate).toLocaleDateString()}</p>
                    <p>Estado: {task.status}</p>
                </li>
            ))}
        </ul>
    );
};

export default TaskList;
