import { useNavigate } from "react-router-dom";
import paymentBox from "../components/PaymentBox";
import PaymentBox from "../components/PaymentBox";

const Payment = () => {
  const navigate = useNavigate();

  // 나중에 실제 받아온 데이터로 교체
  const cartItems = [];

  const isEmpty = cartItems.length === 0;

  return (
    <div className="flex w-[1200px]  mx-auto justify-between items-start pt-[90px] pb-[120px] ">
        {isEmpty ? (
            <div className="py-[218px] px-[148px] ">
                <p className="pb-[24px] text-[24px] font-semibold">장바구니가 비어있습니다.</p>
                <button 
                    onClick={() => navigate("/")}
                    className=" bg-[#FDF7C3] px-[64px] py-[16px] text-[20px] rounded-[16px]"
                >쇼핑하러 가기</button>
            </div>
        ) : (
            <div className="">
                <div className="">
                    {cartItems.map((item, index) => (
                    <div key={index} className="">
                        <p>{item.restaurant}</p>
                        <p>{item.menu}</p>
                        <p>{item.price}</p>
                        <p>{item.count}</p>
                    </div>
                    ))}
                </div>
            </div> 
        )}
        <div className="">
            <PaymentBox />
        </div>
    </div>
  );
};

export default Payment;