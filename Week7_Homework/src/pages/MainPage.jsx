import Navbar from "../components/Navbar";
import MenuModal from "../components/MenuModal";
import RestaurantCard from "../components/RestaurantCard";
import { getShops, getShopMenus } from "../services/shopApi";
import { useState, useEffect } from "react";

export default function MainPage() {
  const [restaurants, setRestaurants] = useState([]);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  // 수량 - 로컬스토리지에서 불러오기
  const [quantities, setQuantities] = useState(() => {
    const saved = localStorage.getItem("quantities");
    return saved ? JSON.parse(saved) : {};
  });

  // 선택된 옵션 - 로컬스토리지에서 불러오기
  const [selectedOptions, setSelectedOptions] = useState(() => {
    const saved = localStorage.getItem("selectedOptions");
    return saved ? JSON.parse(saved) : {};
  });

  // 상점 목록 불러오기
  useEffect(() => {
    const fetchShops = async () => {
      const shops = await getShops();
      const mapped = shops.map((shop) => ({
        id: shop.shopId,
        name: shop.name,
        image: "/placeholder.png",
        rating: null,
      }));
      setRestaurants(mapped);
    };
    fetchShops();
  }, []);

  // quantities 바뀔 때마다 로컬스토리지에 저장
  useEffect(() => {
    localStorage.setItem("quantities", JSON.stringify(quantities));
  }, [quantities]);

  // selectedOptions 바뀔 때마다 로컬스토리지에 저장
  useEffect(() => {
    localStorage.setItem("selectedOptions", JSON.stringify(selectedOptions));
  }, [selectedOptions]);

  // 상점 클릭하면 그 상점 메뉴를 불러와서 모달 열기
  const handleSelectRestaurant = async (restaurant) => {
    const menus = await getShopMenus(restaurant.id);
    const mappedMenus = menus.map((menu) => ({
      id: menu.menuId,
      name: menu.name,
      price: menu.price,
      options: menu.options.map((opt) => ({
        id: opt.menuOptionId,
                name: opt.name,
                price: opt.additionalPrice,
              })),
    }));
    setSelectedRestaurant({ ...restaurant, menus: mappedMenus });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 dt:grid-cols-4 gap-4">
          {restaurants.map((restaurant) => (
            <RestaurantCard
              key={restaurant.id}
              restaurant={restaurant}
              onClick={handleSelectRestaurant}
            />
          ))}
        </div>
      </main>

      {selectedRestaurant && (
        <MenuModal
          restaurant={selectedRestaurant}
          onClose={() => setSelectedRestaurant(null)}
          quantities={quantities}
          setQuantities={setQuantities}
          selectedOptions={selectedOptions}
          setSelectedOptions={setSelectedOptions}
        />
      )}

    </div>
  );
}