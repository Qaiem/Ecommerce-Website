import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import Productitem from './Productitem';

const BestSeller = () => {
    const { products } = useContext(ShopContext);
    const [bestSeller, setBestSeller] = useState([]);

    useEffect(() => {
        if (products && products.length > 0) {
            // Adjusted property name to match your products data
            const bestProduct = products.filter((item) => item.bestseller === true);
            setBestSeller(bestProduct.slice(0, 5));
            console.log("Filtered Best Sellers:", bestProduct); // Check if this logs correctly
        }
    }, [products]);

    return (
        <div className='my-10'>
            <div className='text-center text-3xl py-8'>
                <Title text1={'BEST'} text2={'SELLERS'} />
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia ex impedit, aliquam dolorum vel sed perferendis esse repellat adipisci quasi repudiandae fugit nisi eos temporibus quaerat nesciunt doloribus! Exercitationem, beatae?
                </p>
            </div>

            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {
                    bestSeller.map((item, index) => (
                        <Productitem key={index} id={item._id} name={item.name} image={item.image} price={item.price} />
                    ))
                }
            </div>
        </div>
    );
}

export default BestSeller;




