import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";

const RelatedProducts = ({ category, subCategory }) => {
  const { products } = useContext(ShopContext);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      const filteredProducts = products.filter(
        (item) => item.category === category && item.subCategory === subCategory
      );
      setRelated(filteredProducts.slice(0, 5));
    }
  }, [products, category, subCategory]); // Add category and subCategory to dependencies

  return (
    <div className="related-products">
      <h2 className="text-xl font-semibold">Related Products</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        {related.length > 0 ? (
          related.map((item) => (
            <div key={item._id} className="border p-4 rounded shadow-sm">
              <img src={item.image[0]} alt={item.name} className="w-full h-40 object-cover" />
              <h3 className="mt-2 text-lg font-medium">{item.name}</h3>
              <p className="text-gray-600">{item.price}</p>
              <button className="mt-2 bg-black text-white px-4 py-2 rounded">Add to Cart</button>
            </div>
          ))
        ) : (
          <p>No related products found.</p>
        )}
      </div>
    </div>
  );
};

export default RelatedProducts;
