import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/frontend_assets/Assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState('');
  const [selectedSize, setSelectedSize] = useState(null);

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
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100 bg-gradient-to-b from-gray-50 to-white'>
      <div className='flex flex-col sm:flex-row gap-12 px-6 sm:px-10'>
        {/* Product Images */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {productData.image.map((item, index) => (
              <img 
                src={item} 
                key={index} 
                className='w-24 sm:w-20 sm:mb-3 flex-shrink-0 cursor-pointer border border-gray-300 hover:border-blue-400 transition-all duration-300 hover:scale-105 rounded-md shadow-sm' 
                onClick={() => setImage(item)}
                alt={`Product Image ${index + 1}`}
              />
            ))}
          </div>
          <div className='w-full sm:w-[80%]'>
            <img className='w-96 h-[calc(100%-35px)] mx-auto sm:mx-0 rounded-md shadow-lg hover:scale-105 transition-transform duration-300' src={image} alt='Product Image' />
          </div>
        </div>

        {/* Product Info */}
        <div className='flex-1 sm:px-2'>
          <h1 className='font-medium text-3xl mt-1 mb-2 text-gray-800'>{productData.name}</h1>
          <div className='flex items-center'>
            <img src={assets.star_icon} alt="" className="w-3 h-3" />
            <img src={assets.star_icon} alt="" className="w-3 h-3" />
            <img src={assets.star_icon} alt="" className="w-3 h-3" />
            <img src={assets.star_icon} alt="" className="w-3 h-3" />
            <img src={assets.star_dull_icon} alt="" className="w-3 h-3" />
            <p className='pl-1 text-xs text-gray-600'>{122} reviews</p>
          </div>
          <p className='mt-2 text-2xl font-semibold text-orange-600'>{currency}{productData.price}</p>
          <p className='mt-2 text-gray-600 md:w-4/5 leading-snug text-sm'>{productData.description}</p>
          
          {/* Select Size */}
          <div className='flex flex-col gap-3 my-5'>
            <p className='text-sm font-medium'>Select Size</p>
            <div className='flex gap-2'>
              {productData.sizes.map((item, index) => (
                <button 
                  className={`border py-1 px-3 rounded-full transition-all duration-300 ${selectedSize === item ? 'bg-blue-600 text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
                  key={index}
                  onClick={() => setSelectedSize(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button onClick={()=>addToCart(productData._id,selectedSize)} className='bg-orange-500 text-white px-6 py-2 text-sm rounded-full hover:bg-orange-600 transition-all duration-300'>
            ADD TO CART
          </button>
          <hr className='mt-5 sm:w-4/5' />
          <div className='text-xs text-gray-500 mt-3 flex flex-col gap-1'>
            <p>100% Original Products</p>
            <p>Cash on Delivery is Available</p>
            <p>Easy and Exchange Return Policy within 7 days</p>
          </div>
        </div>
      </div>

      {/* Description & Review Section */}
      <div className='mt-20 px-6 sm:px-10'>
        <div className='flex'> 
          <b className='border px-5 py-3 text-sm bg-gray-100'>Description</b>
          <p className='border px-5 py-3 text-sm bg-gray-50'>Reviews {122}</p>
        </div>
        <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-600 bg-gray-50'>
          <p>{productData.description}</p>
          <p>Experience comfort and style with our latest clothing collection, made from premium materials and designed for everyday wear.</p>
          <p>Perfect for any occasion, this clothing line offers versatility and trend-setting fashion.</p>
        </div>
      </div>

      {/* Display Related Products */}
      <RelatedProducts category={productData.category} subCategory={productData.subCategory}/>
    </div>
  ) : (
    <div className='opacity-0'></div>
  );
};

export default Product;
