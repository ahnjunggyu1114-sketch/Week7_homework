import { axiosInstance } from "./axiosInstance";

export const getShops = async () => {
  const res = await axiosInstance.get("/api/shops");
  return res.data.data;
};

export const getShopMenus = async (shopId) => {
  const res = await axiosInstance.get(`/api/shops/${shopId}/menus`);
  return res.data.data;
};