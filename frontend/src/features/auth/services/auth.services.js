import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:7777/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export const login = async ({ email, password }) => {
  const res = await api.post("/auth/login", { email, password });
  return res.data;
};

export const register = async ({
  username,
  email,
  password,
  confirmPassword,
}) => {
  const res = await api.post("/auth/register", {
    username,
    email,
    password,
    confirmPassword,
  });
  return res.data;
};

export const getMyData = async () => {
  const res = await api.get("/auth/get-me");
  return res.data;
};

export const logout = async () => {
  const res = await api.get("/auth/logout");
  return res.data;
};
