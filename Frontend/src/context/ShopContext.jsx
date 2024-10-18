import { createContext, useEffect, useState } from "react";
import { products } from "../assets/frontend_assets/Assets";
import { toast } from "react-toastify";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const currency = '$';
    const delivery_fee = 10;
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cartItem, setCartItem] = useState({});

    const addToCart = (itemId, selectedSize) => {

        if(!selectedSize){
           toast.error('Select Product Size');
           return;
        }

        let cartData = structuredClone(cartItem);

        if (cartData[itemId]) {
            if (cartData[itemId][selectedSize]) { // Use selectedSize here
                cartData[itemId][selectedSize] += 1;
            } else {
                cartData[itemId][selectedSize] = 1; // Initialize for the new size
            }
        } else {
            cartData[itemId] = {};
            cartData[itemId][selectedSize] = 1; // Initialize for the new item
        }
        setCartItem(cartData);
    }
   const getCartCount = () => {
      let totalCount = 0;
      for(const items in cartItem){
        for(const item in cartItem[items]){
         try{
           if(cartItem[items][item] > 0){
            totalCount += cartItem[items][item]
           }
         }catch{
         console.error("Error in getCartCount", error)
         }
        }
      }
      return totalCount;
   }

    const value = {
        products, currency, delivery_fee, search, setSearch, showSearch, setShowSearch, cartItem, addToCart, getCartCount
    };

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    );
}

export default ShopContextProvider;
