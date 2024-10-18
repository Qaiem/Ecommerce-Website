import { createContext, useEffect, useState } from "react";
import { products } from "../assets/frontend_assets/Assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom"

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const currency = '$';
    const delivery_fee = 10;
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cartItem, setCartItem] = useState({});
    const navigate = useNavigate()

    const addToCart = (itemId, selectedSize) => {
        if (!selectedSize) {
            toast.error('Select Product Size');
            return;
        }

        let cartData = structuredClone(cartItem);

        if (cartData[itemId]) {
            if (cartData[itemId][selectedSize]) {
                cartData[itemId][selectedSize] += 1;
            } else {
                cartData[itemId][selectedSize] = 1;
            }
        } else {
            cartData[itemId] = {};
            cartData[itemId][selectedSize] = 1;
        }
        setCartItem(cartData);
    };

    const getCartCount = () => {
        let totalCount = 0;
        for (const items in cartItem) {
            for (const item in cartItem[items]) {
                try {
                    if (cartItem[items][item] > 0) {
                        totalCount += cartItem[items][item];
                    }
                } catch (error) {
                    console.error("Error in getCartCount:", error);
                }
            }
        }
        return totalCount;
    };

    const updateQuantity = (itemId, selectedSize, quantity) => {
        let cartData = structuredClone(cartItem);

        if (!cartData[itemId]) {
            cartData[itemId] = {};
        }

        if (quantity > 0) {
            cartData[itemId][selectedSize] = quantity;
        } else {
            delete cartData[itemId][selectedSize];
            if (Object.keys(cartData[itemId]).length === 0) {
                delete cartData[itemId];
            }
        }

        setCartItem(cartData);
    };

    const getCartAmount = () => {
        let totalAmount = 0;
        for (const items in cartItem) {
            const itemInfo = products.find((product) => product._id === items);
            if (!itemInfo) continue; // Skip if the product is not found

            for (const item in cartItem[items]) {
                try {
                    if (cartItem[items][item]) {
                        totalAmount += itemInfo.price * cartItem[items][item];
                    }
                } catch (error) {
                    console.error("Error in getCartAmount:", error);
                }
            }
        }
        return totalAmount;
    };

    const value = {
        products,
        currency,
        delivery_fee,
        search,
        setSearch,
        showSearch,
        setShowSearch,
        cartItem,
        addToCart,
        getCartCount,
        updateQuantity,
        getCartAmount,
        navigate
    };

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
