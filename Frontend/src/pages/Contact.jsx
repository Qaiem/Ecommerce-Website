import React from 'react';
import { assets } from '../assets/frontend_assets/Assets'; // Update the path as necessary
import Title from '../components/Title';

const Contact = () => {
  return (
    <div className='flex flex-col items-center w-[90%] sm:max-w-5xl m-auto mt-14 gap-16 text-gray-800'>
      {/* Title Section */}
      <Title text1='CONTACT' text2='US' />

      {/* Banner Section */}
      <div className='w-full bg-gradient-to-br from-orange-500 to-orange-400 p-8 rounded-md text-center shadow-lg'>
        <h2 className='text-white text-2xl font-bold'>We’re Here to Help!</h2>
        <p className='text-white mt-2'>Your questions and feedback are important to us. Reach out anytime!</p>
      </div>
      
      {/* Contact Information Section */}
      <div className='flex flex-col md:flex-row items-center justify-around w-full gap-8'>
        {/* Left Section: Contact Image */}
        <div className='w-full md:w-1/2 flex justify-center'>
          <img
            src={assets.contact_img} // Update this to your actual contact image path
            alt='Contact Us'
            className='w-[300px] h-auto rounded-md shadow-lg hover:scale-105 transition-transform duration-300'
          />
        </div>

        {/* Right Section: Contact Info */}
        <div className='w-full md:w-1/2 bg-gradient-to-br from-orange-100 via-white to-orange-50 p-6 rounded-md shadow-lg'>
          <h3 className='text-xl font-semibold text-gray-800'>Contact Information</h3>
          <div className='flex items-center mt-2'>
            <i className='fas fa-envelope mr-2'></i>
            <p className='text-gray-700'>Email: support@example.com</p>
          </div>
          <div className='flex items-center'>
            <i className='fas fa-phone mr-2'></i>
            <p className='text-gray-700'>Phone: (123) 456-7890</p>
          </div>
          <div className='flex items-center'>
            <i className='fas fa-map-marker-alt mr-2'></i>
            <p className='text-gray-700'>Address: 123 Main Street, City, Country</p>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className='w-full'>
        <h3 className='text-xl font-semibold text-gray-800'>Find Us Here</h3>
        <div className='mt-4'>
          {/* Replace with your map embed link */}
          <iframe
            title='Map'
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345099065!2d144.95373531568795!3d-37.81627997975194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f43b795%3A0x5045675218ceed30!2sCity%20Center!5e0!3m2!1sen!2sau!4v1633081532284!5m2!1sen!2sau'
            width='100%'
            height='300'
            style={{ border: 0 }}
            allowFullScreen=''
            loading='lazy'
          ></iframe>
        </div>
      </div>

      {/* Newsletter Subscription Section */}
      <div className='w-full bg-gradient-to-br from-white to-orange-50 p-6 rounded-md shadow-lg'>
        <h3 className='text-xl font-semibold text-gray-800'>Subscribe to Our Newsletter</h3>
        <p className='text-gray-700 mt-2'>Stay updated with our latest news and offers.</p>
        <form className='mt-4'>
          <input
            type='email'
            placeholder='Your Email'
            className='border border-gray-300 p-2 rounded-md w-full'
            required
          />
          <button
            type='submit'
            className='bg-orange-500 text-white font-medium px-6 py-2 mt-4 rounded-full hover:bg-orange-600 transition-colors duration-300'
          >
            Subscribe
          </button>
        </form>
      </div>

      {/* Feedback Section */}
      <div className='w-full'>
        <h3 className='text-xl font-semibold text-gray-800'>We Value Your Feedback</h3>
        <p className='text-gray-700 mt-2'>Let us know how we’re doing.</p>
        <form className='mt-4'>
          <textarea
            placeholder='Your Feedback'
            rows='4'
            className='border border-gray-300 p-2 rounded-md w-full'
            required
          ></textarea>
          <button
            type='submit'
            className='bg-orange-500 text-white font-medium px-6 py-2 mt-4 rounded-full hover:bg-orange-600 transition-colors duration-300'
          >
            Submit Feedback
          </button>
        </form>
      </div>

      {/* Call to Action Section */}
      <div className='w-full bg-orange-500 p-6 rounded-md text-center'>
        <h3 className='text-white text-xl font-semibold'>Ready to Connect?</h3>
        <p className='text-white mt-2'>Reach out to us for any inquiries or assistance!</p>
        <button
          className='bg-white text-orange-500 font-medium px-6 py-2 mt-4 rounded-full hover:bg-orange-200 transition-colors duration-300'
        >
          Contact Us
        </button>
      </div>

      {/* Contact Form Section */}
      <div className='w-full bg-gradient-to-br from-white to-orange-50 p-6 rounded-md shadow-lg'>
        <h3 className='text-xl font-semibold text-gray-800'>Send Us a Message</h3>
        <form className='mt-4'>
          <div className='flex flex-col gap-4'>
            <input
              type='text'
              placeholder='Your Name'
              className='border border-gray-300 p-2 rounded-md'
              required
            />
            <input
              type='email'
              placeholder='Your Email'
              className='border border-gray-300 p-2 rounded-md'
              required
            />
            <textarea
              placeholder='Your Message'
              rows='4'
              className='border border-gray-300 p-2 rounded-md'
              required
            ></textarea>
            <button
              type='submit'
              className='bg-orange-500 text-white font-medium px-6 py-2 mt-4 rounded-full hover:bg-orange-600 transition-colors duration-300'
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
