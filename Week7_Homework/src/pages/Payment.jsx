import { useNavigate } from "react-router-dom";
import paymentBox from "../components/PaymentBox";
import PaymentBox from "../components/PaymentBox";
import ShoppingCart from "../components/ShoppingCart";
import mockData from "../data/shopping_mockdata.js"
import Navbar from "../components/Navbar";
import { restaurants } from "../data/restaurants";



const Payment = () => {
    const navigate = useNavigate();
    const quantities = JSON.parse(localStorage.getItem("quantities")) || {};

    const cartItems = restaurants
        .map((restaurant) => {
            const selectedMenus = restaurant.menus
            .filter((menu) => quantities[menu.id])
            .map((menu) => ({
                ...menu,
                count: quantities[menu.id],
            }));

            return {
            ...restaurant,
            menu: selectedMenus,
            };
        })
        .filter((restaurant) => restaurant.menu.length > 0);

    const totalprice = cartItems.reduce((acc, restaurant) => {
        const restaurantTotal = restaurant.menu.reduce((sum, menu) => {
            return sum + menu.price * menu.count;
        }, 0);
        return acc + restaurantTotal;
    }, 0);

    const isEmpty = cartItems.length === 0;

    return (
        <div>
            <Navbar />
            <div className="flex flex-col dt:flex-row dt:w-[1200px] mx-auto dt:justify-between justify-center items-center pt-[90px] pb-[120px] ">
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
                        {cartItems.map((restaurant) => (
                            <ShoppingCart key={restaurant.id} restaurant={restaurant}  />
                        ))}
                    </div>
                )}
                <div className="">
                    <PaymentBox totalprice={totalprice} />
                </div>
            </div>
        </div>
    );
};

export default Payment;