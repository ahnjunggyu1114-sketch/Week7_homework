export default function MenuModal({ restaurant, onClose, quantities, setQuantities }) {


  // 담기 버튼 클릭 → 수량 1로 설정
  const handleAdd = (menuId) => {
    setQuantities({ ...quantities, [menuId]: 1 });
  };

  // + 버튼 → 수량 1 증가
  const handleIncrease = (menuId) => {
    setQuantities({ ...quantities, [menuId]: quantities[menuId] + 1 });
  };

  // - 버튼 → 수량 1 감소
  // 0이 되면 담기 버튼으로 돌아옴
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
              className="flex justify-between items-center py-2 border-b border-gray-50 hover:bg-teal-50 rounded-lg px-2 transition-colors"
            >
              <span className="text-sm font-medium">{menu.name}</span>
              <div className="flex items-center gap-3">
                <span className="text-sm font-bold text-teal-400">
                  {menu.price.toLocaleString()}원
                </span>

                {/* 수량 있으면 - 1 + 버튼, 없으면 담기 버튼 */}
                {quantities[menu.id] ? (
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleDecrease(menu.id)}
                      className="w-7 h-7 rounded-full bg-teal-400 text-white font-bold hover:bg-teal-500"
                    >
                      -
                    </button>
                    <span className="text-sm font-bold w-4 text-center">
                      {quantities[menu.id]}
                    </span>
                    <button
                      onClick={() => handleIncrease(menu.id)}
                      className="w-7 h-7 rounded-full bg-teal-400 text-white font-bold hover:bg-teal-500"
                    >
                      +
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => handleAdd(menu.id)}
                    className="bg-teal-400 text-white px-3 py-1 rounded-full text-xs font-bold hover:bg-teal-500 transition-colors"
                  >
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