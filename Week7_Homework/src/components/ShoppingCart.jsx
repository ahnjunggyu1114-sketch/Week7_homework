import Plus from "../assets/plus.svg";
import Minus from "../assets/minus.svg";
import X from "../assets/x.svg";

const ShoppingCart = ({ restaurant }) => {
    return (
        <div className=" rounded-[16px] overflow-hidden pb-[51px]">
            <div className="bg-[#FDF7C3] text-[20px] font-bold px-[24px] py-[12px]">
                <p>{restaurant.name}</p>
            </div>
            <div className="bg-white">
                {restaurant.menu.map((menu, index) => (
                    <div key={menu.id} className="">
                        <div className="flex justify-between items-center px-[24px] py-[12px] gap-[118px]">
                            <div className="text-[24px]">
                                <p>{menu.name}</p>
                                <p className="text-[#F0485F]">{menu.price.toLocaleString()}원</p>
                            </div>
                            <div className=" flex gap-[32px] text-[24px] items-center justify-center ">
                                <button className="bg-[#F7F7F7] h-[32px] w-[32px] cursor-pointer ">
                                    <img src={Minus} alt="Minus" />
                                </button>
                                <p>{menu.count}</p>
                                <button className="bg-[#F7F7F7] h-[32px] w-[32px] cursor-pointer">
                                    <img src={Plus} alt="Plus" />
                                </button>
                                <button className=" flex items-center justify-center bg-[#F7F7F7] h-[32px] w-[32px] cursor-pointer">
                                    <img src={X} alt="X" />
                                </button>
                            </div>

                        </div>
                    {index !== restaurant.menu.length - 1 && <hr />}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ShoppingCart;