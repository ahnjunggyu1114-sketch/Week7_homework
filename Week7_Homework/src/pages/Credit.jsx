import Navbar from "../components/Navbar";
import { useState } from "react";
import useAuthStore from "../stores/useAuthStore";
import { changeCredit } from "../apis/credit";

const Credit = () => {
    const [selectedAmount, setSelectedAmount] = useState(0);

    const user = useAuthStore((state) => state.user);
    const setUser = useAuthStore((state) => state.setUser);

    const currentCredit = user?.credit || 0;
    const afterCredit = currentCredit + selectedAmount;

    const handleCharge = async () => {
        if (!selectedAmount) {
        alert("충전 금액을 선택해주세요.");
        return;
        }
        try {
            const result = await changeCredit({
                amount: selectedAmount,
                type: "CHARGE",
            });
            if (!result.success) {
                alert(result.message);
                return;
            }
            const updatedUser = {
                ...user,
                credit: currentCredit + selectedAmount,
            };
            setUser(updatedUser);
            alert("크레딧 충전 완료");
            setSelectedAmount(0);
        } catch (error) {
            console.log("크레딧 충전 에러:", error.response?.data || error);
            if (error.response?.data?.message) {
                alert(error.response.data.message);
            } else {
                alert("크레딧 충전 중 오류가 발생했습니다.");
            }
        }
    };

    return (
        <div className=" bg-[#F7F7F7]">
            <Navbar />

            <div className="flex justify-center pt-[140px]">
                <div className="w-[450px] rounded-[20px] border border-[#CAC8C8] bg-white px-[36px] py-[44px]">
                    <h1 className="text-center text-[36px] font-bold mb-[36px]">
                        크레딧 충전하기
                    </h1>

                    <div className="grid grid-cols-2 dt:grid-cols-4 gap-x-[12px] gap-y-[16px] justify-items-center mb-[32px]">
                        <button
                            className={`w-[88px] h-[36px] rounded-[5px] ${
                                selectedAmount === 1000 ? "bg-[#98D2B8] text-white" : "bg-[#F7F7F7] text-black"
                            }`}
                            type="button"
                            onClick={() => setSelectedAmount(1000)}
                        >
                            +1,000C
                        </button>
                        <button
                            className={`w-[88px] h-[36px] rounded-[5px] ${
                                selectedAmount === 3000 ? "bg-[#98D2B8] text-white" : "bg-[#F7F7F7] text-black"
                            }`}
                            type="button"
                            onClick={() => setSelectedAmount(3000)}
                        >
                            +3,000C
                        </button>
                        <button
                            className={`w-[88px] h-[36px] rounded-[5px] ${
                                selectedAmount === 5000 ? "bg-[#98D2B8] text-white" : "bg-[#F7F7F7] text-black"
                            }`}
                            type="button"
                            onClick={() => setSelectedAmount(5000)}
                        >
                            +5,000C
                        </button>
                        <button
                            className={`w-[88px] h-[36px] rounded-[5px] ${
                                selectedAmount === 10000 ? "bg-[#98D2B8] text-white" : "bg-[#F7F7F7] text-black"
                            }`}
                            type="button"
                            onClick={() => setSelectedAmount(10000)}
                        >
                            +10,000C
                        </button>
                    </div>

                    <div className="mb-[56px] bg-[#F7F7F7] rounded-[8px] px-[16px] py-[18px]">
                        <div className="flex justify-between items-center mb-[14px]">
                            <p className="">보유 크레딧</p>
                            <p className="">{currentCredit}C</p>
                        </div>

                        <div className="flex justify-between items-center">
                            <p className="font-semibold text-[#F0485F]">충전 후 크레딧</p>
                            <p className="font-semibold text-[#F0485F]">{afterCredit}C</p>
                        </div>
                    </div>

                    <div className="flex justify-between items-center mb-[28px]">
                        <p className="font-semibold">결제금액</p>
                        <p className="font-semibold">{selectedAmount.toLocaleString()}원</p>
                    </div>

                    <div className="flex justify-center">
                        <button className="w-[164px] h-[48px] bg-[#F0485F] text-white rounded-[16px]" type="button" onClick={handleCharge}>
                            충전하기
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
    };

    export default Credit;