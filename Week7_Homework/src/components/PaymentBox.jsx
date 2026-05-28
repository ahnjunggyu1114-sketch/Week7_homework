import { useState } from "react";




const PaymentBox = ( { totalprice } ) => {
    const [selectedMethod, setSelectedMethod] = useState("");

    return (
        <div className="py-[56px] px-[48px] rounded-[20px] bg-[#FFFFFF]">
            <h1 className=" pb-[60px] text-center text-[36px] font-bold">결제하기</h1>

            <div className="pb-[120px]">
                <p className="text-[#F0485F] text-[20px] pb-[32px]">결제 방법</p>

                <div className="flex flex-col justify-center items-center dt:grid dt:grid-cols-2 gap-y-[24px] gap-x-[32px]">

                    <button 
                        onClick={() => setSelectedMethod("카카오페이")}
                        className={`cursor-pointer w-[220px] px-[24px] py-[12px] rounded-[5px] text-[20px] border ${
                            selectedMethod === "카카오페이"
                                ? "text-[#F0485F] border-[#F0485F] bg-[#FFDFE3]"
                                : "text-[#111111] border-transparent bg-[#F7F7F7]"
                        }`}
                    >
                        카카오페이
                    </button>

                    <button 
                        onClick={() => setSelectedMethod("네이버페이")}
                        className={`cursor-pointer w-[220px] px-[24px] py-[12px] rounded-[5px] text-[20px] border ${
                            selectedMethod === "네이버페이"
                                ? "text-[#F0485F] border-[#F0485F] bg-[#FFDFE3]"
                                : "text-[#111111] border-transparent bg-[#F7F7F7]"
                        }`}
                    >
                        네이버페이
                    </button>

                    <button 
                        onClick={() => setSelectedMethod("카드결제")}
                        className={`cursor-pointer w-[220px] px-[24px] py-[12px] rounded-[5px] text-[20px] border ${
                            selectedMethod === "카드결제"
                                ? "text-[#F0485F] border-[#F0485F] bg-[#FFDFE3]"
                                : "text-[#111111] border-transparent bg-[#F7F7F7]"
                        }`}
                    >
                        카드결제
                    </button>

                    <button 
                        onClick={() => setSelectedMethod("무통장입금")}
                        className={`cursor-pointer w-[220px] px-[24px] py-[12px] rounded-[5px] text-[20px] border ${
                            selectedMethod === "무통장입금"
                                ? "text-[#F0485F] border-[#F0485F] bg-[#FFDFE3]"
                                : "text-[#111111] border-transparent bg-[#F7F7F7]"
                        }`}
                    >
                        무통장입금
                    </button>
                </div>
            </div>

            <div className="pb-[28px] flex flex-row justify-between ">
                <p className="text-[20px] font-bold">총 결제금액</p>
                <p className="text-[20px] font-bold">{totalprice.toLocaleString()}원</p>            
            </div>

            <div className="flex flex-row justify-center">
                <button
                    className={`cursor-pointer rounded-[16px] px-[64px] py-[16px] text-[20px] border ${
                        selectedMethod
                            ? "bg-[#F0485F] text-white border-[#F0485F]"
                            : "bg-[#F7F7F7] text-[#9A9A9A] border-transparent"
                    }`}
                >
                    {totalprice.toLocaleString()}원 결제하기
                </button>
            </div>
        </div>
    );
};

export default PaymentBox;