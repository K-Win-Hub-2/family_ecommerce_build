import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:5000',
});

export const sendChatMessage = (formData) => {
    return api.post('/chat-bot', formData);
};