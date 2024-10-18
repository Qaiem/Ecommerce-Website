import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';

const Order = () => {
  const { products, currency } = useContext(ShopContext);

  // Function to calculate the total cost
  const calculateTotal = () => {
    return products.reduce((total, product) => {
      return total + product.price * product.quantity;
    }, 0).toFixed(2);
  };

  // Get current date in a readable format (optional)
  const getCurrentDate = () => {
    const date = new Date();
    return `${date.getDate()}, ${date.toLocaleString('default', { month: 'short' })}, ${date.getFullYear()}`;
  };

  return (
    <div className='border-t pt-16 min-h-[80vh]'>
      <div className='text-2xl mb-8'>
        <Title text1={'MY'} text2={'ORDER'} />
      </div>

      {/* Order List */}
      <div className='bg-gray-100 p-6 rounded-lg shadow-md'>
        <div className='flex flex-col gap-6'>
          {products.length > 0 ? (
            products.slice(1, 4).map((item, index) => (
              <div
                key={index}
                className='py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4'
              >
                {/* Product Info */}
                <div className='flex gap-6 items-start text-sm'>
                  <img
                    src={item.image[0]}
                    alt={item.name}
                    className='w-16 sm:w-20'
                  />
                  <div>
                    <p className='font-medium sm:text-base'>{item.name}</p>
                    <div className='flex items-center gap-3 mt-2 text-base text-gray-700'>
                      <p className='text-lg'>{currency} {item.price}</p>
                      <p className='text-gray-500 text-sm'>Quantity: {item.quantity}</p>
                      <p>Size: {item.size}</p>
                    </div>
                    <p className='mt-2'>Date: <span className='text-gray-400'>{getCurrentDate()}</span></p>
                  </div>
                </div>

                <div className='md:w-1/2 flex justify-between'>
                  <div className='flex items-center gap-2'>
                    <p className='min-w-2 h-2 rounded-full bg-green-500'></p>
                    <p className='text-sm md:text-base'>Ready to ship</p>
                  </div>
                  <button className='border px-4 py-2 text-sm font-medium rounded-sm'>
                    Track Order
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className='text-center text-gray-500'>No items in your order.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Order;
