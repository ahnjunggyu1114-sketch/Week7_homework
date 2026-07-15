import client from "./client";

export const changeCredit = async ({ amount, type }) => {
  const response = await client.post("/api/credits", {
    amount,
    type,
  });

  return response.data;
};

export const getCreditHistory = async () => {
  const response = await client.get("/api/credits");
  return response.data;
};