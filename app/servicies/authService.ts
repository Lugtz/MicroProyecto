import axios from 'axios';

const API_URL = 'http://localhost:5000/api/users';

export const login = async (email: string, password: string) => {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    return response.data;
};
