export default function MenuModal({ restaurant, onClose }) {
  return (
    <div
      className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-white w-full max-w-sm rounded-2xl max-h-[80vh] overflow-y-auto mx-4">

        {/* 헤더 */}
        <div className="flex justify-between items-center p-5 border-b border-gray-100">
          <div>
            <h2 className="font-bold text-lg">{restaurant.name}</h2>
            <p className="text-sm text-gray-400 mt-0.5">⭐ {restaurant.rating}</p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-xl"
          >
            ✕
          </button>
        </div>

        {/* 메뉴 목록 */}
        <ul className="p-5 flex flex-col gap-3">
          {restaurant.menus.map((menu) => (
            <li
              key={menu.id}
              className="flex justify-between items-center py-2 border-b border-gray-50"
            >
              <span className="text-sm font-medium">{menu.name}</span>
              <span className="text-sm font-bold text-teal-400">
                {menu.price.toLocaleString()}원
              </span>
            </li>
          ))}
        </ul>

      </div>
    </div>
  );
}