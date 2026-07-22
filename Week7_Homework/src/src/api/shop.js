import instance from "./instance";

// 상점 목록 조회 (GET /api/shops)
export const getShops = async () => {
  const response = await instance.get("/api/shops");
  return response.data.data;
  // response.data.data = 실제 상점 목록 배열
};

// 특정 상점의 메뉴 목록 조회 (GET /api/shops/{shopId}/menus)
export const getShopMenus = async (shopId) => {
  const response = await instance.get(`/api/shops/${shopId}/menus`);
  return response.data.data;
};