import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import { assets } from '../assets/frontend_assets/Assets';
import CartTotal from '../components/CartTotal';

const Cart = () => {
  const { products, currency, cartItem, updateQuantity, navigate } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];
    for (const items in cartItem) {
      for (const item in cartItem[items]) {
        if (cartItem[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItem[items][item],
          });
        }
      }
    }
    setCartData(tempData);
  }, [cartItem]);

  return (
    <div className='border-t pt-14 bg-gray-50 min-h-[80vh]'>
      <div className='text-2xl mb-6'>
        <Title text1={'YOUR'} text2={'CART'} />
      </div>

      <div className='bg-white p-6 rounded-lg shadow-lg'>
        {cartData.length > 0 ? (
          cartData.map((item) => {
            const productData = products.find((product) => product._id === item._id);

            if (!productData) return null;

            return (
              <div
                key={`${item._id}-${item.size}`}
                className='py-4 px-6 border-b last:border-none text-gray-700 grid grid-cols-[4fr_1fr_0.5fr] sm:grid-cols-[4fr_1.5fr_0.5fr] items-center gap-4 bg-white rounded-lg hover:shadow-md transition-shadow'
              >
                {/* Product Info */}
                <div className='flex items-start gap-4'>
                  <img
                    className='w-16 sm:w-20 rounded-md shadow-sm'
                    src={productData.image[0]}
                    alt={productData.name}
                  />
                  <div>
                    <p className='text-sm sm:text-lg font-semibold'>{productData.name}</p>
                    <div className='flex items-center gap-5 mt-2 text-gray-600'>
                      <p className='text-sm sm:text-base'>
                        {currency} {productData.price}
                      </p>
                      <p className='px-2 py-1 bg-gray-100 text-xs sm:text-sm rounded-md'>{`Size: ${item.size}`}</p>
                    </div>
                  </div>
                </div>
                {/* Quantity Input */}
                <div className='flex items-center'>
                  <input
                    onChange={(e) => updateQuantity(item._id, item.size, parseInt(e.target.value))}
                    className='border w-12 sm:w-16 text-center py-1 rounded-md focus:border-gray-400'
                    type='number'
                    min={1}
                    value={item.quantity}
                  />
                </div>
                {/* Remove Button */}
                <div className='flex justify-end'>
                  <img
                    onClick={() => updateQuantity(item._id, item.size, 0)}
                    className='w-6 sm:w-8 cursor-pointer hover:opacity-80 transition-opacity'
                    src={assets.bin_icon}
                    alt='Remove item'
                  />
                </div>
              </div>
            );
          })
        ) : (
          <p className='text-center text-gray-500 py-6'>Your cart is empty.</p>
        )}
      </div>

      {/* Cart Total and Checkout Button */}
      <div className='flex justify-end mt-10'>
        <div className='w-full sm:w-[450px] bg-white p-6 rounded-lg shadow-md'>
          <CartTotal />
          <div className='w-full text-end'>
            <button
              onClick={() => navigate('/place-order')}
              className='bg-black text-white text-sm my-8 py-3 px-4 rounded-md hover:bg-gray-800 transition-colors'
            >
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
