import Navbar from "../components/Navbar";
import MenuModal from "../components/MenuModal";
import RestaurantCard from "../components/RestaurantCard";
import { restaurants } from "../data/restaurants";
import { useState, useEffect } from "react"; 

export default function MainPage() {

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

  // quantities 바뀔 때마다 로컬스토리지에 저장
  useEffect(() => {
    localStorage.setItem("quantities", JSON.stringify(quantities));
  }, [quantities]);

  // selectedOptions 바뀔 때마다 로컬스토리지에 저장
  useEffect(() => {
    localStorage.setItem("selectedOptions", JSON.stringify(selectedOptions));
  }, [selectedOptions]);
 
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

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