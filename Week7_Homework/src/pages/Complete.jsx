import { useNavigate } from "react-router-dom";
import { useEffect } from "react";



const CompletePage = () => {
    const navigate = useNavigate();
    useEffect(() => {
        localStorage.removeItem("quantities");
    }, []);

    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-[#F7F7F7]">
            <h1 className="text-[36px] font-bold pb-[12px]">주문 완료!</h1>
            <p className="text-[20px] text-[#858585] pb-[64px]">음식이 배달 됩니다 ...</p>

            <button
                className="bg-[#F0485F] text-white px-[64px] py-[16px] rounded-[16px] text-[20px] cursor-pointer"
                onClick={() => navigate("/")}
            >
                홈으로
            </button>
        </div>
    );
};

export default CompletePage;