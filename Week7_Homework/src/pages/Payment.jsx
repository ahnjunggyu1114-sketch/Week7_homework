import { useNavigate } from "react-router-dom";
import paymentBox from "../components/PaymentBox";
import PaymentBox from "../components/PaymentBox";
import ShoppingCart from "../components/ShoppingCart";
import mockData from "../data/shopping_mockdata.js"
import Navbar from "../components/Navbar";
import { restaurants } from "../data/restaurants";
import { useState } from "react";
import useAuthStore from "../stores/useAuthStore";



const Payment = () => {
    const navigate = useNavigate();

    const user = useAuthStore((state) => state.user);

    const [quantities, setQuantities] = useState(
        JSON.parse(localStorage.getItem("quantities")) || {}
    );

    const selectedOptions = JSON.parse(localStorage.getItem("selectedOptions")) || {};

    const cartItems = restaurants
        .map((restaurant) => {
            const selectedMenus = restaurant.menus
            .filter((menu) => quantities[menu.id])
            .map((menu) => ({
                ...menu,
                count: quantities[menu.id] ,
                option: selectedOptions[menu.id] || null,
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

    const handlePlus = (menuId) => {
        const newQuantities = {
            ...quantities,
            [menuId]: (quantities[menuId] || 0) + 1,
        };
        setQuantities(newQuantities);
        localStorage.setItem("quantities", JSON.stringify(newQuantities));
    };

    const handleMinus = (menuId) => {
        if (!quantities[menuId]) return;

        if (quantities[menuId] === 1) {
            const newQuantities = { ...quantities };
            delete newQuantities[menuId];
            setQuantities(newQuantities);
            localStorage.setItem("quantities", JSON.stringify(newQuantities));
        } else {
            const newQuantities = {
            ...quantities,
            [menuId]: quantities[menuId] - 1,
            };
            setQuantities(newQuantities);
            localStorage.setItem("quantities", JSON.stringify(newQuantities));
        }
    };

    const handleDelete = (menuId) => {
        const newQuantities = { ...quantities };
        delete newQuantities[menuId];
        setQuantities(newQuantities);
        localStorage.setItem("quantities", JSON.stringify(newQuantities));
    };

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
                            <ShoppingCart
                                key={restaurant.id}
                                restaurant={restaurant}
                                onPlus={handlePlus}
                                onMinus={handleMinus}
                                onDelete={handleDelete}
                            />
                        ))}
                    </div>
                )}
                <div className="">
                    <PaymentBox
                        totalprice={totalprice}
                        currentCredit={user?.credit || 0}
                    />
                </div>
            </div>
        </div>
    );
};

export default Payment;