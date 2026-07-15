import { useNavigate } from "react-router-dom";
import PaymentBox from "../components/PaymentBox";
import ShoppingCart from "../components/ShoppingCart";
import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import useAuthStore from "../stores/useAuthStore";
import { getCart, updateCartItemQuantity, deleteCartItem } from "../services/cartApi";

const Payment = () => {
    const navigate = useNavigate();
    const user = useAuthStore((state) => state.user);

    const [cartItems, setCartItems] = useState([]);
    const [totalprice, setTotalprice] = useState(0);

    const loadCart = async () => {
        const cart = await getCart();
        const mappedItems = cart.items.map((item) => ({
            id: item.cartItemId,
            name: item.name,
            price: item.price,
            count: item.quantity,
        }));
        setCartItems(mappedItems);
        setTotalprice(cart.totalPrice);
    };

    useEffect(() => {
        loadCart();
    }, []);

    const handlePlus = async (itemId) => {
        const item = cartItems.find((m) => m.id === itemId);
        await updateCartItemQuantity(itemId, item.count + 1);
        loadCart();
    };

    const handleMinus = async (itemId) => {
        const item = cartItems.find((m) => m.id === itemId);
        if (item.count <= 1) {
            await deleteCartItem(itemId);
        } else {
            await updateCartItemQuantity(itemId, item.count - 1);
        }
        loadCart();
    };

    const handleDelete = async (itemId) => {
        await deleteCartItem(itemId);
        loadCart();
    };

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
                        <ShoppingCart
                            restaurant={{ id: "cart", name: "장바구니", menu: cartItems }}
                            onPlus={handlePlus}
                            onMinus={handleMinus}
                            onDelete={handleDelete}
                        />
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