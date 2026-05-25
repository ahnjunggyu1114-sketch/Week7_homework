export default function RestaurantCard({ restaurant, onClick }) {
  return (
    <div
      onClick={() => onClick(restaurant)}
      className="bg-white rounded-xl overflow-hidden cursor-pointer hover:shadow-lg transition-shadow border border-gray-100"
    >
      {/* 이미지 */}
      <img
        src={restaurant.image}
        alt={restaurant.name}
        className="w-full h-40 object-cover"
      />

      {/* 텍스트 */}
      <div className="p-3">
        <h3 className="font-bold text-sm">{restaurant.name}</h3>
        <p className="text-xs text-gray-500 mt-1">⭐ {restaurant.rating}</p>
      </div>
    </div>
  );
}