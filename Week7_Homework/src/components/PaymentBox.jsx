import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../stores/useAuthStore";


const PaymentBox = ( { totalprice, currentCredit } ) => {
    const [selectedMethod, setSelectedMethod] = useState("");
    const navigate = useNavigate();

    const user = useAuthStore((state) => state.user);
    const setUser = useAuthStore((state) => state.setUser);
    const remainCredit = currentCredit - totalprice;
    const isCreditEnough = remainCredit >= 0;

    const handleGoCredit = () => {
        navigate("/credit");
    };

    const handlePayment = () => {
        
        if (!isCreditEnough) {
            alert("크레딧이 부족합니다.");
            return;
        }
        const updatedUser = {
            ...user,
            credit: currentCredit - totalprice,
        };
        setUser(updatedUser);
        const savedUsers = JSON.parse(localStorage.getItem("users")) || [];
        const updatedUsers = savedUsers.map((savedUser) =>
            savedUser.username === user.username ? updatedUser : savedUser
        );
        localStorage.setItem("users", JSON.stringify(updatedUsers));
        navigate("/complete");
    };
    
    return (
        <div className="py-[56px] px-[48px] rounded-[20px] bg-[#FFFFFF]">
            <h1 className=" pb-[60px] text-center text-[36px] font-bold">결제하기</h1>
            <div className="mb-[20px] rounded-[8px] px-[16px] py-[18px] bg-[#F7F7F7]">
                <div className="flex justify-between items-center mb-[10px]">
                    <p className="text-[16px] font-bold">보유 크레딧</p>
                    <p className="text-[16px] font-bold">{currentCredit.toLocaleString()}C</p>
                </div>

                <div className="flex justify-between items-center mb-[10px]">
                    <p className="text-[14px] text-[#858585]">차감 예정 크레딧</p>
                    <p className="text-[14px] text-[#858585]">-{totalprice.toLocaleString()}C</p>
                </div>

                <div className="flex justify-between items-center">
                    <p className="text-[16px] font-bold text-[#0E8F6A]">차감 후 잔액</p>
                    <p className="text-[16px] font-bold text-[#0E8F6A]">
                    {remainCredit.toLocaleString()}C
                    </p>
                </div>
            </div>
            

            <div className="pb-[28px] flex flex-row justify-between ">
                <p className="text-[20px] font-bold">총 결제금액</p>
                <p className="text-[20px] font-bold">{totalprice.toLocaleString()}C</p>            
            </div>

            {!isCreditEnough && (
                <div className="flex justify-end items-center gap-[8px] mb-[28px]">
                    <p className="text-[14px] text-[#858585]">크레딧이 부족한가요?</p>
                    <button
                    type="button"
                    className="px-[12px] py-[4px] rounded-[8px] bg-[#0E8F6A] text-white text-[14px]"
                    onClick={handleGoCredit}
                    >
                    크레딧 충전
                    </button>
                </div>
            )}

            <div className="flex flex-row justify-center">
                <button
                    className={`cursor-pointer rounded-[16px] px-[64px] py-[16px] text-[20px] border ${
                        isCreditEnough
                            ? "bg-[#F0485F] text-white border-[#F0485F]"
                            : "bg-[#F7F7F7] text-[#9A9A9A] border-transparent"
                    }`}
                    onClick={handlePayment}
                >
                    {totalprice.toLocaleString()}C 결제하기
                </button>
            </div>
        </div>
    );
};

export default PaymentBox;