import React, { useContext, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';

const Order = () => {
  const { products, currency, clearCart } = useContext(ShopContext); // Include clearCart
  const [showModal, setShowModal] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const calculateTotal = () => {
    return products
      .reduce((total, product) => total + product.price * product.quantity, 0)
      .toFixed(2);
  };

  const getCurrentDate = () => {
    const date = new Date();
    return `${date.getDate()}, ${date.toLocaleString('default', { month: 'short' })}, ${date.getFullYear()}`;
  };

  const handleTrackOrder = (order) => {
    setSelectedOrder(order);
    setShowModal(true);
  };

  return (
    <div className='border-t pt-16 min-h-[80vh] bg-gray-50'>
      <div className='text-2xl mb-8'>
        <Title text1={'MY'} text2={'ORDER'} />
      </div>

      {/* Order List */}
      <div className='bg-white p-6 rounded-lg shadow-lg'>
        <div className='flex flex-col gap-6'>
          {products.length > 0 ? (
            products.slice(0, 3).map((item, index) => ( // Adjust the slicing logic if needed
              <div key={index} className='py-4 px-4 border-b text-gray-700 bg-white rounded-lg hover:shadow-lg transition-shadow flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
                <div className='flex gap-6 items-start text-sm'>
                  <img src={item.image[0]} alt={item.name} className='w-16 sm:w-20 rounded-lg' />
                  <div>
                    <p className='font-semibold text-base'>{item.name}</p>
                    <div className='flex items-center gap-3 mt-2 text-base text-gray-700'>
                      <p className='text-lg'>{currency} {item.price}</p>
                      <p className='text-gray-500 text-sm'>Qty: {item.quantity}</p>
                      <p className='text-gray-500 text-sm'>Size: {item.size}</p>
                    </div>
                    <p className='mt-2 text-sm text-gray-500'>
                      Order Date: <span className='text-gray-400'>{getCurrentDate()}</span>
                    </p>
                  </div>
                </div>

                <div className='md:w-1/2 flex justify-between items-center'>
                  <div className='flex items-center gap-2'>
                    <span className='w-3 h-3 rounded-full bg-green-500'></span>
                    <p className='text-sm md:text-base text-green-700'>Ready to ship</p>
                  </div>
                  <button onClick={() => handleTrackOrder(item)} className='border border-green-500 bg-green-50 hover:bg-green-500 hover:text-white transition-colors px-4 py-2 text-sm font-medium rounded-md'>
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

      {showModal && selectedOrder && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
          <div className='bg-white p-6 rounded-lg shadow-lg max-w-md w-full'>
            <h2 className='text-lg font-bold mb-4'>Tracking Details</h2>
            <p className='text-gray-600 mb-2'>Order ID: {selectedOrder.id}</p>
            <p className='text-gray-600 mb-2'>Product: {selectedOrder.name}</p>
            <p className='text-gray-600 mb-2'>Status: In Transit</p>
            <p className='text-gray-600 mb-2'>Expected Delivery: 3-5 Days</p>
            <button onClick={() => setShowModal(false)} className='mt-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors'>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Order;
