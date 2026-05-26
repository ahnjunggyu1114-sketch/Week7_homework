const PaymentBox = () => {
    return (
        <div className="py-[56px] px-[48px] rounded-[20px] bg-[#FFFFFF]">
            <h1 className=" pb-[60px] text-center text-[36px] font-bold">결제하기</h1>

            <div className="pb-[120px]">
                <p className="text-[#F0485F] text-[20px] pb-[32px]">결제 방법</p>

                <div className="grid grid-cols-2 gap-y-[24px] gap-x-[32px]">
                    <button className="w-[220px] px-[24px] py-[12px] rounded-[5px] text-[20px] bg-[#F7F7F7]">카카오페이</button>
                    <button className="w-[220px] px-[24px] py-[12px] rounded-[5px] text-[20px] bg-[#F7F7F7]">네이버페이</button>
                    <button className="w-[220px] px-[24px] py-[12px] rounded-[5px] text-[20px] bg-[#F7F7F7]">카드 결제</button>
                    <button className="w-[220px] px-[24px] py-[12px] rounded-[5px] text-[20px] bg-[#F7F7F7]">무통장 입금</button>
                </div>
            </div>

            <div className="pb-[28px] flex flex-row justify-between ">
                <p className="text-[20px] font-bold">총 결제금액</p>
                <p className="text-[20px] font-bold">00,000원</p>
            </div>

            <div className="flex flex-row justify-center">
                <button className=" rounded-[16px] px-[64px] py-[16px] text-[20px] bg-[#F7F7F7] ">00,000원 결제하기</button>
            </div>
        </div>
    );
};

export default PaymentBox;