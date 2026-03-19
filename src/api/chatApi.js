import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.1.18:5000",
});

export const sendChatMessage = (formData) => {
  return api.post("/chat", formData);
};
