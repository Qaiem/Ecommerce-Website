import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Title from '../components/Title';
import CartTotal from '../components/CartTotal';
import { assets } from '../assets/frontend_assets/Assets';

const PlaceOrder = () => {
  // State for form inputs
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    phoneNumber: '',
    paymentMethod: 'cash', // Default payment method
  });

  const navigate = useNavigate(); // Initialize useNavigate

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className='flex flex-col sm:flex-row justify-between gap-6 pt-5 mt-14 min-h-[80vh] border-t bg-gray-100'>
      {/* Left Side */}
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px] bg-white p-6 rounded-lg shadow-lg'>
        <div className='text-xl sm:text-2xl my-3'>
          <Title text1={'DELIVERY'} text2={'INFORMATION'} />
        </div>
        <div className='flex flex-col gap-3'>
          <div className='flex gap-3'>
            <input
              type='text'
              name='firstName'
              placeholder='First Name'
              value={formData.firstName}
              onChange={handleChange}
              required
              className='border border-gray-300 rounded px-3 py-2 w-full'
            />
            <input
              type='text'
              name='lastName'
              placeholder='Last Name'
              value={formData.lastName}
              onChange={handleChange}
              required
              className='border border-gray-300 rounded px-3 py-2 w-full'
            />
          </div>
          <input
            type='email'
            name='email'
            placeholder='Email Address'
            value={formData.email}
            onChange={handleChange}
            required
            className='border border-gray-300 rounded px-3 py-2 w-full'
          />
          <input
            type='text'
            name='street'
            placeholder='Street'
            value={formData.street}
            onChange={handleChange}
            required
            className='border border-gray-300 rounded px-3 py-2 w-full'
          />
          <div className='flex gap-3'>
            <input
              type='text'
              name='city'
              placeholder='City'
              value={formData.city}
              onChange={handleChange}
              required
              className='border border-gray-300 rounded px-3 py-2 w-full'
            />
            <input
              type='text'
              name='state'
              placeholder='State'
              value={formData.state}
              onChange={handleChange}
              required
              className='border border-gray-300 rounded px-3 py-2 w-full'
            />
          </div>
          <div className='flex gap-3'>
            <input
              type='number'
              name='zipCode'
              placeholder='Zip Code'
              value={formData.zipCode}
              onChange={handleChange}
              required
              className='border border-gray-300 rounded px-3 py-2 w-full'
            />
            <input
              type='text'
              name='country'
              placeholder='Country'
              value={formData.country}
              onChange={handleChange}
              required
              className='border border-gray-300 rounded px-3 py-2 w-full'
            />
          </div>
          <input
            type='text'
            name='phoneNumber'
            placeholder='Phone Number'
            value={formData.phoneNumber}
            onChange={handleChange}
            required
            className='border border-gray-300 rounded px-3 py-2 w-full'
          />
        </div>
      </div>

      {/* Right Side */}
      <div className='flex flex-col w-full sm:max-w-[480px] bg-white p-6 rounded-lg shadow-lg'>
        <div className='text-xl sm:text-2xl my-3'>
          <Title text1={'ORDER'} text2={'SUMMARY'} />
        </div>
        <div className='min-w-80 overflow-hidden'>
          <CartTotal />
        </div>

        <div className='mt-12'>
          <Title text1={'PAYMENT'} text2={'METHOD'} />
          {/* Payment Method */}
          <div className='flex gap-3 flex-col lg:flex-row'>
            <div className='flex items-center gap-3 border p-2 px-3 cursor-pointer' onClick={() => setFormData({ ...formData, paymentMethod: 'stripe' })}>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${formData.paymentMethod === 'stripe' ? 'bg-blue-500' : 'bg-transparent'}`} />
              <img className='h-5 mx-4' src={assets.stripe_logo} alt="Stripe" />
            </div>
            <div className='flex items-center gap-3 border p-2 px-3 cursor-pointer' onClick={() => setFormData({ ...formData, paymentMethod: 'razorpay' })}>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${formData.paymentMethod === 'razorpay' ? 'bg-blue-500' : 'bg-transparent'}`} />
              <img className='h-5 mx-4' src={assets.razorpay_logo} alt="Razorpay" />
            </div>
            <div className='flex items-center gap-3 border p-2 px-3 cursor-pointer' onClick={() => setFormData({ ...formData, paymentMethod: 'cash' })}>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${formData.paymentMethod === 'cash' ? 'bg-blue-500' : 'bg-transparent'}`} />
              <p className='text-gray-500 text-xs'>CASH ON DELIVERY</p>
            </div>
          </div>
        </div>
        {/* Submit Button */}
        <div className='w-full text-end mt-8'>
          <button
            className='bg-black text-white px-16 py-3 text-sm'
            onClick={() => navigate('/order')} // Navigate to '/order' on click
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
