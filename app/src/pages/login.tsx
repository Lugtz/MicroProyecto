import React, { useState } from 'react';
import { login } from '../services/authService';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const user = await login(email, password);
            if (user.role === 'admin') {
                navigate('/dashboard');
            } else {
                navigate('/tasks');
            }
        } catch (error) {
            alert('Credenciales inválidas');
        }
    };

    return (
        <div className="login-container">
            <h1>Iniciar Sesión</h1>
            <input
                type="email"
                placeholder="Correo"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Entrar</button>
        </div>
    );
};

export default Login;
