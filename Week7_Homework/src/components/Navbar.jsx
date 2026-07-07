import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="bg-[#F0485F] text-white px-6 py-4">

      {/* 데스크탑 */}
      <div className="hidden dt:flex items-center justify-between max-w-7xl mx-auto">
        <span className="text-xl font-bold">🍢 분식 배달</span>
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate("/payment")}
            className="text-white text-2xl hover:opacity-70"
          >
            🛒
          </button>
          <button
            onClick={() => navigate("/login")}
            className="bg-white text-teal-400 px-4 py-2 rounded-full font-bold hover:opacity-90"
          >
            로그인
          </button>
        </div>
      </div>

      {/* 모바일 */}
      <div className="dt:hidden">
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold">🍢 분식 배달</span>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>

        {isOpen && (
          <div className="flex flex-col gap-4 mt-4 pb-2">
            <button
              onClick={() => navigate("/payment")}
              className="text-white text-2xl hover:opacity-70"
            >
              🛒 장바구니
            </button>
            <button
              onClick={() => navigate("/login")}
              className="bg-white text-[#F0485F] px-4 py-2 rounded-full font-bold w-full"
            >
              로그인
            </button>
          </div>
        )}
      </div>

    </nav>
  );
}