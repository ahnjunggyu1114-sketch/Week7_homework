import client from "./client";

export const signup = async ({ email, password, name }) => {
  const response = await client.post("/api/auth/signup", {
    email,
    password,
    name,
  });

  return response.data;
};

export const login = async ({ email, password }) => {
  const response = await client.post("/api/auth/login", {
    email,
    password,
  });

  return response.data;
};