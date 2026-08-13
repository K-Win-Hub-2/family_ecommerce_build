import axios from "axios";

const api = axios.create({
  baseURL: "",
});

export const sendChatMessage = (formData) => {
  return api.post("/chat", formData);
};
