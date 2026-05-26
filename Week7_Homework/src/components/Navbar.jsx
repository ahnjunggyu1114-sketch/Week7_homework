import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-teal-400 text-white px-6 py-4">

      {/* 데스크탑 */}
      <div className="hidden dt:flex items-center justify-between max-w-7xl mx-auto">
        <span className="text-xl font-bold">🍢 분식 골라</span>
        <button className="bg-white text-teal-400 px-4 py-2 rounded-full font-bold hover:opacity-90">
          로그인
        </button>
      </div>

      {/* 모바일 */}
      <div className="dt:hidden">
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold">🍢 분식 골라</span>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>

        {isOpen && (
          <div className="flex flex-col gap-4 mt-4 pb-2">
            <button className="bg-white text-teal-400 px-4 py-2 rounded-full font-bold w-full">
              로그인
            </button>
          </div>
        )}
      </div>

    </nav>
  );
}