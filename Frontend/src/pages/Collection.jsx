import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/frontend_assets/Assets';
import Title from '../components/Title';
import Productitem from '../components/Productitem';

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relevant");

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory(prev => prev.filter(item => item !== e.target.value));
    } else {
      setCategory(prev => [...prev, e.target.value]);
    }
  };

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory(prev => prev.filter(item => item !== e.target.value));
    } else {
      setSubCategory(prev => [...prev, e.target.value]);
    }
  };

  const applyfilter = () => {
    let productcopy = products.slice();

    if (showSearch && search) {
      productcopy = productcopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
    }

    if (category.length > 0) {
      productcopy = productcopy.filter(item => category.includes(item.category));
    }
    if (subCategory.length > 0) {
      productcopy = productcopy.filter(item => subCategory.includes(item.subCategory));
    }
    setFilterProducts(productcopy);
  };

  const sortProduct = () => {
    let fpCopy = filterProducts.slice();

    switch (sortType) {
      case 'low-high':
        setFilterProducts(fpCopy.sort((a, b) => (a.price - b.price)));
        break;

      case 'high-low':
        setFilterProducts(fpCopy.sort((a, b) => (b.price - a.price)));
        break;

      default:
        applyfilter();
        break;
    }
  };

  useEffect(() => {
    applyfilter();
  }, [category, subCategory, search, showSearch]);

  useEffect(() => {
    sortProduct();
  }, [sortType]);

  return (
    <div className='flex flex-col sm:flex-row gap-6 sm:gap-10 pt-10 border-t'>
      {/* Filter options */}
      <div className='sm:w-64'>
        <p
          onClick={() => setShowFilter(!showFilter)}
          className='my-2 text-xl flex items-center cursor-pointer gap-2 bg-orange-500 text-white px-3 py-2 rounded-lg shadow-md hover:bg-orange-600 transition-all duration-300'
        >
          FILTERS
          <img className={`h-3 sm:hidden transform ${showFilter ? 'rotate-90' : 'rotate-0'} transition-transform duration-300`} src={assets.dropdown_icon} alt='' />
        </p>
        
        {/* Category filter */}
        <div className={`border border-gray-200 bg-white pl-5 py-3 mt-6 rounded-lg shadow-md ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-semibold text-gray-800'>CATEGORIES</p>
          <div className='flex flex-col gap-3 text-sm font-light text-gray-700'>
            <label className='flex items-center gap-2 cursor-pointer hover:text-orange-600 transition-all duration-300'>
              <input type='checkbox' className='w-4 h-4 text-orange-500 rounded border-gray-300 focus:ring-orange-500' value={'Men'} onChange={toggleCategory} />
              Men
            </label>
            <label className='flex items-center gap-2 cursor-pointer hover:text-orange-600 transition-all duration-300'>
              <input type='checkbox' className='w-4 h-4 text-orange-500 rounded border-gray-300 focus:ring-orange-500' value={'Women'} onChange={toggleCategory} />
              Women
            </label>
            <label className='flex items-center gap-2 cursor-pointer hover:text-orange-600 transition-all duration-300'>
              <input type='checkbox' className='w-4 h-4 text-orange-500 rounded border-gray-300 focus:ring-orange-500' value={'Kids'} onChange={toggleCategory} />
              Kids
            </label>
          </div>
        </div>

        {/* SubCategory filter */}
        <div className={`border border-gray-200 bg-white pl-5 py-3 my-5 rounded-lg shadow-md ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-semibold text-gray-800'>TYPE</p>
          <div className='flex flex-col gap-3 text-sm font-light text-gray-700'>
            <label className='flex items-center gap-2 cursor-pointer hover:text-orange-600 transition-all duration-300'>
              <input type='checkbox' className='w-4 h-4 text-orange-500 rounded border-gray-300 focus:ring-orange-500' value={'Topwear'} onChange={toggleSubCategory} />
              Topwear
            </label>
            <label className='flex items-center gap-2 cursor-pointer hover:text-orange-600 transition-all duration-300'>
              <input type='checkbox' className='w-4 h-4 text-orange-500 rounded border-gray-300 focus:ring-orange-500' value={'Bottomwear'} onChange={toggleSubCategory} />
              Bottomwear
            </label>
            <label className='flex items-center gap-2 cursor-pointer hover:text-orange-600 transition-all duration-300'>
              <input type='checkbox' className='w-4 h-4 text-orange-500 rounded border-gray-300 focus:ring-orange-500' value={'Winterwear'} onChange={toggleSubCategory} />
              Winterwear
            </label>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className='flex-1'>
        <div className='flex justify-between items-center text-base sm:text-2xl mb-6'>
          <Title text1={'ALL'} text2={'COLLECTIONS'} />
          {/* Product Sort */}
          <select onChange={(e) => setSortType(e.target.value)} className='border-2 border-gray-300 text-sm px-3 py-1 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-300'>
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>
        {/* Map all products */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {filterProducts.map((item, index) => (
            <Productitem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
