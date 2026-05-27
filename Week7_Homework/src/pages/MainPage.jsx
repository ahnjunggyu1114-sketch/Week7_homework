import Navbar from "../components/Navbar";
import MenuModal from "../components/MenuModal";
import { useState } from "react";
import RestaurantCard from "../components/RestaurantCard";
import { restaurants } from "../data/restaurants";

export default function MainPage() {

  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [quantities, setQuantities] = useState({});
 

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