import { axiosInstance } from "./axiosInstance";

export const getCart = async () => {
  const res = await axiosInstance.get("/api/cart");
  return res.data.data;
};

export const addCartItem = async (menuId, menuOptionId, quantity) => {
  const res = await axiosInstance.post("/api/cart/items", {
    menuId,
    menuOptionId,
    quantity,
  });
  return res.data.data;
};

export const updateCartItemQuantity = async (itemId, quantity) => {
  const res = await axiosInstance.patch(`/api/cart/items/${itemId}`, { quantity });
  return res.data.data;
};

export const deleteCartItem = async (itemId) => {
  await axiosInstance.delete(`/api/cart/items/${itemId}`);
};