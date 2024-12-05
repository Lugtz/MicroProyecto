import axios from 'axios';

const API_URL = 'http://localhost:5000/api/activities';

export const getTasks = async (userId: string) => {
    const response = await axios.get(`${API_URL}/${userId}`);
    return response.data;
};
