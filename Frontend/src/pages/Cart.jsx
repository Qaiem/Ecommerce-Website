import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';

const Cart = () => {
  // Destructure correctly from ShopContext
  const { products, currency, cartItem } = useContext(ShopContext);

  const [cartData, setCardData] = useState([]);

  useEffect(() => {
    const tempData = [];
    for (const items in cartItem) {
      for (const item in cartItem[items]) {
        if (cartItem[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItem[items][item]
          });
        }
      }
    }
    setCardData(tempData);
  }, [cartItem]);

  return (
    <div className='border-t pt-14'>
      <div className='text-2xl mb-3'>
        <Title text1={'YOUR'} text2={'CART'} />
      </div>

      <div>
        {
          cartData.map((item, index) => {
            const productData = products.find((product) => product._id === item._id);

            // Check if productData exists before rendering
            if (!productData) return null;

            return (
              <div key={index} className='py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'>
                <div className='flex items-start gap-6'>
                  <img className='w-16 sm:w-20' src={productData.image[0]} alt={productData.name} />
                  <div>
                    <p className='text-xs sm:text-lg font-medium'>{productData.name}</p>
                    <div className='flex items-center gap-5 mt-2'>
                      <p>{currency}{productData.price}</p>
                      <p className='px-2 sm:px-3 sm:py-1 border bg-slate-50'>{`Size: ${item.size}`}</p>
                    </div>
                  </div>
                </div>
                <input className='border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1' type='number' min={1} defaultValue={item.quantity}/>
                <img />
              </div>
            );
          })
        }
      </div>
    </div>
  );
};

export default Cart;
