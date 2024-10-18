import React, { useState } from 'react';

const Login = () => {
  const [currentState, setCurrentState] = useState('Login');

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className='flex flex-col items-center w-[90%] sm:max-w-md m-auto mt-14 gap-5 p-6 bg-white shadow-md rounded-lg text-gray-800'
    >
      <div className='inline-flex items-center gap-2 mb-4 mt-10'>
        <p className='text-3xl font-semibold'>{currentState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-orange-600' />
      </div>
      {currentState === 'Sign Up' && (
        <input
          type='text'
          placeholder='Name'
          className='w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-300'
          required
        />
      )}
      <input
        type='email'
        placeholder='Email'
        className='w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-300'
        required
      />
      <input
        type='password'
        placeholder='Password'
        className='w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-300'
        required
      />
      <div className='w-full flex justify-between text-sm mt-[-8px] text-gray-600'>
        <p className='cursor-pointer hover:text-orange-600 transition-colors duration-200'>Forgot your password?</p>
        {currentState === 'Login' ? (
          <p 
            onClick={() => setCurrentState('Sign Up')} 
            className='cursor-pointer hover:text-orange-600 transition-colors duration-200'>
            Create account
          </p>
        ) : (
          <p 
            onClick={() => setCurrentState('Login')} 
            className='cursor-pointer hover:text-orange-600 transition-colors duration-200'>
            Login Here
          </p>
        )}
      </div>
      <button
        type='submit'
        className='w-full bg-orange-600 text-white font-medium py-2 rounded-md shadow-lg hover:bg-orange-700 transition-all duration-300'
      >
        {currentState === 'Login' ? 'Sign In' : 'Sign Up'}
      </button>
    </form>
  );
};

export default Login;
