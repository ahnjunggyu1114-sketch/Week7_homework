import { useState } from "react";
import { addCartItem } from "../services/cartApi";

export default function MenuModal({ restaurant, onClose, quantities, setQuantities, selectedOptions, setSelectedOptions }) {
  const [isAdding, setIsAdding] = useState(false);

  const handleIncrease = (menuId) => {
    setQuantities({ ...quantities, [menuId]: (quantities[menuId] || 0) + 1 });
  };

  const handleDecrease = (menuId) => {
    if (!quantities[menuId] || quantities[menuId] === 0) return;
    if (quantities[menuId] === 1) {
      const newQuantities = { ...quantities };
      delete newQuantities[menuId];
      setQuantities(newQuantities);
    } else {
      setQuantities({ ...quantities, [menuId]: quantities[menuId] - 1 });
    }
  };

  // 옵션은 단일 선택 (라디오 방식)
  const handleOptionSelect = (menuId, optionId) => {
    setSelectedOptions({ ...selectedOptions, [menuId]: optionId });
  };

  // 선택 안 했으면 첫 번째 옵션을 기본값으로 취급
  const getSelectedOptionId = (menu) =>
    selectedOptions[menu.id] ?? menu.options?.[0]?.id;

  const getOptionPrice = (menu) => {
    const selectedId = getSelectedOptionId(menu);
    const opt = menu.options?.find((o) => o.id === selectedId);
    return opt ? opt.price : 0;
  };

  const handleAddToCart = async () => {
    const itemsToAdd = restaurant.menus.filter((menu) => quantities[menu.id] > 0);
    if (itemsToAdd.length === 0) {
      alert("메뉴를 선택해주세요.");
      return;
    }
    setIsAdding(true);
    try {
      for (const menu of itemsToAdd) {
        const menuOptionId = getSelectedOptionId(menu);
        await addCartItem(menu.id, menuOptionId, quantities[menu.id]);
      }
      alert("장바구니에 담았습니다.");
      onClose();
    } catch (err) {
      console.error(err);
      alert("장바구니 담기에 실패했습니다.");
    } finally {
      setIsAdding(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-white w-full max-w-xl rounded-[20px] max-h-[80vh] overflow-y-auto mx-4">

        <div className="flex justify-between items-center p-5 border-b border-gray-100">
          <div>
            <h2 className="font-bold text-lg">{restaurant.name}</h2>
            <p className="text-sm text-gray-400 mt-0.5">⭐ {restaurant.rating}</p>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-xl">
            ✕
          </button>
        </div>

        <ul className="p-5 flex flex-col gap-3">
          {restaurant.menus.map((menu) => (
            <li key={menu.id} className="py-3 border-b border-gray-50 px-2">

              <div className="flex justify-between items-start mb-2">
                <span className="text-sm font-medium">{menu.name}</span>
                <span className="text-sm font-bold text-[#F0485F]">
                  {(menu.price + getOptionPrice(menu)).toLocaleString()}원
                </span>
              </div>

              {menu.options && menu.options.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {menu.options.map((option) => {
                    const isSelected = getSelectedOptionId(menu) === option.id;
                    return (
                      <button
                        key={option.id}
                        onClick={() => handleOptionSelect(menu.id, option.id)}
                        className={`px-2 py-0.5 text-xs rounded-[20px] border transition-colors ${
                          isSelected
                            ? "border-[#F0485F] bg-[#F0485F] text-white"
                            : "border-[#F0485F] text-[#F0485F] hover:bg-pink-50"
                        }`}
                      >
                        {option.name}{option.price > 0 ? ` (+${option.price.toLocaleString()}원)` : ""}
                      </button>
                    );
                  })}
                </div>
              )}

              <div className="flex justify-end">
                <div className="flex items-center gap-2">
                  <button onClick={() => handleDecrease(menu.id)}
                    className="w-7 h-7 rounded-[16px] bg-[#F0485F] text-white font-bold">-</button>
                  <span className="text-sm font-bold w-4 text-center">
                    {quantities[menu.id] || 0}
                  </span>
                  <button onClick={() => handleIncrease(menu.id)}
                    className="w-7 h-7 rounded-[16px] bg-[#F0485F] text-white font-bold">+</button>
                </div>
              </div>

            </li>
          ))}
        </ul>

        <div className="p-5 border-t border-gray-100">
          <button
            onClick={handleAddToCart}
            disabled={isAdding}
            className="w-full py-3 rounded-[16px] bg-[#F0485F] text-white font-bold disabled:opacity-50"
          >
            {isAdding ? "담는 중..." : "장바구니 담기"}
          </button>
        </div>

      </div>
    </div>
  );
}