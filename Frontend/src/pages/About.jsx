import React from 'react';
import { useNavigate } from 'react-router-dom';
import { assets } from '../assets/frontend_assets/Assets';
import Title from '../components/Title';
import  Newsletter  from '../components/Newsletter';

const About = () => {
  const navigate = useNavigate();

  return (
    <div className='flex flex-col items-center w-[90%] sm:max-w-5xl m-auto mt-14 gap-16 text-gray-800'>
      {/* Top Section */}
      <div className='flex flex-col md:flex-row items-center gap-8'>
        {/* Left Section with Image */}
        <div className='w-full md:w-1/2 flex justify-center'>
          <img
            src={assets.about_img}
            alt='Our store displays a collection of various quality products'
            className='w-full h-auto rounded-md shadow-lg hover:scale-105 transition-transform duration-300'
          />
        </div>

        {/* Right Section with Text */}
        <div className='w-full md:w-1/2 bg-gradient-to-br from-orange-100 via-white to-orange-50 p-6 rounded-md shadow-lg'>
          <Title text1='ABOUT' text2='US' />
          <p className='text-gray-700'>
            Welcome to our store! We offer a wide variety of high-quality products at unbeatable prices. Our team is dedicated to providing exceptional service, ensuring that every purchase meets your satisfaction.
          </p>
          <p className='text-gray-700 mt-4'>
            From fashion to electronics, home decor to beauty, our store is a one-stop-shop for all your needs. Join us on this journey to bring style, convenience, and quality into your everyday life.
          </p>
          <button
            onClick={() => navigate('/collection')}
            className='bg-orange-500 text-white font-medium px-6 py-2 mt-6 rounded-full hover:bg-orange-600 transition-colors duration-300'
            aria-label='Navigate to collection'
          >
            Shop Now
          </button>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className='w-full'>
        <Title text1='Why' text2='Choose Us?' />
        <div className='flex flex-col md:flex-row justify-around items-start mt-8 gap-8'>
          {/* Convenience */}
          <FeatureCard
            title='Convenience'
            description='Shop anytime, anywhere. Our platform is user-friendly and accessible, making your shopping experience smooth and effortless.'
          />
          {/* Quality Assurance */}
          <FeatureCard
            title='Quality Assurance'
            description='We guarantee the best quality products. Our team ensures that every product meets the highest standards of excellence.'
          />
          {/* Competitive Prices */}
          <FeatureCard
            title='Competitive Prices'
            description='Enjoy great deals and offers. We provide value for your money without compromising on quality.'
          />
        </div>
      </div>

      {/* Divider */}
      <div className='w-full border-t border-gray-300 my-8'></div>
      
      {/* Newsletter Section */}
      <Newsletter />
    </div>
  );
};

// Reusable Component for Feature Cards
const FeatureCard = ({ title, description }) => (
  <div className='w-full md:w-1/3 text-center'>
    <h3 className='text-2xl font-semibold text-orange-600'>{title}</h3>
    <p className='text-gray-700 mt-2'>{description}</p>
  </div>
);

export default About;
