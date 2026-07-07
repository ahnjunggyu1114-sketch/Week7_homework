import { useState } from "react";

export default function MenuModal({ restaurant, onClose, quantities, setQuantities }) {

  const [selectedOptions, setSelectedOptions] = useState({});

  const handleAdd = (menuId) => {
    setQuantities({ ...quantities, [menuId]: 1 });
  };

  const handleIncrease = (menuId) => {
    setQuantities({ ...quantities, [menuId]: quantities[menuId] + 1 });
  };

  const handleDecrease = (menuId) => {
    if (quantities[menuId] === 1) {
      const newQuantities = { ...quantities };
      delete newQuantities[menuId];
      setQuantities(newQuantities);
    } else {
      setQuantities({ ...quantities, [menuId]: quantities[menuId] - 1 });
    }
  };

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
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-xl">
            ✕
          </button>
        </div>

        {/* 메뉴 목록 */}
        <ul className="p-5 flex flex-col gap-3">
          {restaurant.menus.map((menu) => (
            <li key={menu.id} className="py-3 border-b border-gray-50 px-2">

              {/* 메뉴 이름 + 가격 */}
              <div className="flex justify-between items-start mb-2">
                <span className="text-sm font-medium">{menu.name}</span>
                <span className="text-sm font-bold text-[#F0485F]">
                  {menu.price.toLocaleString()}원
                </span>
              </div>

              {/* 옵션 태그들 */}
              {menu.options && (
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {menu.options.map((option) => (
                    <button
                      key={option}
                      onClick={() => setSelectedOptions({ ...selectedOptions, [menu.id]: option })}
                      className={`px-2 py-0.5 text-xs rounded-full border transition-colors ${
                        selectedOptions[menu.id] === option
                          ? "border-[#F0485F] bg-[#F0485F] text-white"
                          : "border-[#F0485F] text-[#F0485F] hover:bg-pink-50"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}

              {/* 수량 버튼 */}
              <div className="flex justify-end">
                {quantities[menu.id] ? (
                  <div className="flex items-center gap-2">
                    <button onClick={() => handleDecrease(menu.id)}
                      className="w-7 h-7 rounded-full bg-[#F0485F] text-white font-bold">-</button>
                    <span className="text-sm font-bold w-4 text-center">{quantities[menu.id]}</span>
                    <button onClick={() => handleIncrease(menu.id)}
                      className="w-7 h-7 rounded-full bg-[#F0485F] text-white font-bold">+</button>
                  </div>
                ) : (
                  <button onClick={() => handleAdd(menu.id)}
                    className="bg-[#F0485F] text-white px-3 py-1 rounded-full text-xs font-bold">
                    담기
                  </button>
                )}
              </div>

            </li>
          ))}
        </ul>

      </div>
    </div>
  );
}