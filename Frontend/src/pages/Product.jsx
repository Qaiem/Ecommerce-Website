import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const Product = () => {
  const { productId } = useParams();
  const { products } = useContext(ShopContext); // Changed to products
  const [productData, setProductData] = useState(null); // Use null instead of false for data objects
  const [image, setImage] = useState('');

  const fetchProductData = () => {
    const foundProduct = products.find((item) => item._id === productId);
    if (foundProduct) {
      setProductData(foundProduct);
      setImage(foundProduct.image[0]);
    }
  };

  useEffect(() => {
    fetchProductData();
  }, [products, productId]);

  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
        {/* Product Data */}
      </div>
      {/* Product Images */}
      <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
        <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
          {productData.image.map((item, index) => (
            <img 
              src={item} 
              key={index} 
              className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' 
              onClick={() => setImage(item)} // Add click functionality to change main image
              alt={`Product Image ${index + 1}`}
            />
          ))}
        </div>
        <div className='w-full sm:w-[80%]'>
          <img className='w-full h-auto' src={image} alt='Product Image' />
        </div>
      </div>
    </div>
  ) : (
    <div className='opacity-0'></div>
  );
};

export default Product;