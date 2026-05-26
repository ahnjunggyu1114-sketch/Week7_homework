import MenuModal from "../components/MenuModal";
import { useState } from "react";
import RestaurantCard from "../components/RestaurantCard";
import { restaurants } from "../data/restaurants";

export default function MainPage() {

  // 지금 클릭된 식당을 기억하는 변수
  // null = 아무것도 선택 안 됨
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50">

      {/* 카드 그리드 */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 dt:grid-cols-4 gap-4">
          {restaurants.map((restaurant) => (
            <RestaurantCard
              key={restaurant.id}
              restaurant={restaurant}
              onClick={setSelectedRestaurant}
            />
          ))}
        </div>
      </main>
      {/* selectedRestaurant 가 있을 때만 모달 보여줌 */}
      {selectedRestaurant && (
        <MenuModal
          restaurant={selectedRestaurant}
          onClose={() => setSelectedRestaurant(null)}
          // onClose: 닫기 누르면 null로 초기화 → 모달 사라짐
        />
      )}

    </div>
  );
}