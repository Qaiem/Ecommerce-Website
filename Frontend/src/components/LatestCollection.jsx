import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import Productitem from './Productitem'

const LatestCollection = () => {

    const { products } = useContext(ShopContext)
    const [latestProduct, setLatestProduct] = useState([])

    useEffect(() => {
        setLatestProduct(products.slice(0,10));
    },[])
   

  return (
    <div className='my-10'>
        <div className='text-center py-8 text-3xl'>
          <Title text1={'LATEST'} text2={'COLLECTION'}/>
          <p className='w-3/4 mx-auto text-xs sm:text-sm md:text-base text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod voluptatibus officiis doloribus repellendus maxime deserunt, magnam ratione dolor sit iusto ea explicabo quia! Exercitationem dicta nemo vitae, est aliquam soluta.</p>
        </div>
        {/* Rendering Products */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {
              latestProduct.map((item,index)=>(
                <Productitem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
              ))
            }
        </div>
    </div>
  )
}

export default LatestCollection