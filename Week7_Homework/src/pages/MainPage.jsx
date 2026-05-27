import Navbar from "../components/Navbar";
import MenuModal from "../components/MenuModal";
import RestaurantCard from "../components/RestaurantCard";
import { restaurants } from "../data/restaurants";
import { useState, useEffect } from "react"; 


export default function MainPage() {

  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [quantities, setQuantities] = useState(() => {
  const saved = localStorage.getItem("quantities");
  return saved ? JSON.parse(saved) : {};
});

// quantities 바뀔 때마다 로컬스토리지에 저장
useEffect(() => {
  localStorage.setItem("quantities", JSON.stringify(quantities));
}, [quantities]);
// [quantities] = quantities 바뀔 때마다 실행
 
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
        />
      )}

    </div>
  );
}