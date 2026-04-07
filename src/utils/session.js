import { v4 as uuidv4 } from "uuid";

const COOKIE_NAME = "chat_session";

export const getSessionId = () => {
  const existing = getCookie(COOKIE_NAME);

  if (existing) {
    try {
      const parsed = JSON.parse(existing);

      if (parsed.expiry > Date.now()) {
        parsed.expiry = Date.now() + 1000 * 60 * 60 * 24;
        setCookie(COOKIE_NAME, JSON.stringify(parsed), 1);

        return parsed.session_id;
      }
    } catch (e) {
      console.error("Invalid session cookie");
    }
  }

  const newSession = {
    session_id: uuidv4(),
    created_at: Date.now(),
    expiry: Date.now() + 1000 * 60 * 60 * 24,
  };

  setCookie(COOKIE_NAME, JSON.stringify(newSession), 1);

  return newSession.session_id;
};

const setCookie = (name, value, days) => {
  const expires = new Date(Date.now() + days * 86400000).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/`;
};

const getCookie = (name) => {
  const cookies = document.cookie.split("; ");
  const match = cookies.find((row) => row.startsWith(name + "="));
  return match ? decodeURIComponent(match.split("=")[1]) : null;
};
