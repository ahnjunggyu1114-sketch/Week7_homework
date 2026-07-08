import Navbar from "../components/Navbar";

const Credit = () => {
    return (
        <div className=" bg-[#F7F7F7]">
            <Navbar />

            <div className="flex justify-center pt-[140px]">
                <div className="w-[450px] rounded-[20px] border border-[#CAC8C8] bg-white px-[36px] py-[44px]">
                    <h1 className="text-center text-[36px] font-bold mb-[36px]">
                        크레딧 충전하기
                    </h1>

                    <div className="flex justify-center gap-[8px] mb-[32px]">
                        <button className="w-[88px] h-[36px]" type="button">+1,000C</button>
                        <button className="w-[88px] h-[36px]" type="button">+3,000C</button>
                        <button className="w-[88px] h-[36px]" type="button">+5,000C</button>
                        <button className="w-[88px] h-[36px]" type="button">+10,000C</button>
                    </div>

                    <div className="mb-[56px] rounded-[8px] px-[16px] py-[18px]">
                        <div className="flex justify-between items-center mb-[14px]">
                            <p className="">보유 크레딧</p>
                            <p className="">5,000C</p>
                        </div>

                        <div className="flex justify-between items-center">
                            <p className="">충전 후 크레딧</p>
                            <p className="">8,000C</p>
                        </div>
                    </div>

                    <div className="flex justify-between items-center mb-[28px]">
                        <p className="">결제금액</p>
                        <p className="">3,000원</p>
                    </div>

                    <div className="flex justify-center">
                        <button className="w-[164px] h-[48px]" type="button">
                            충전하기
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
    };

    export default Credit;