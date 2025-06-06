import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";

const ProductList = ({ filters }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios("http://localhost:3000/products").then((res) => {
      const filtered = res.data.filter(prod => {
        const matchCategory = filters.category === "All" || prod.category.toLowerCase().includes(filters.category.toLowerCase());
        const matchPrice = prod.price <= filters.price;
        return matchCategory && matchPrice;
      });
      setProducts(filtered);
    });
  }, [filters]);

  return (
    <div>
      <p className="mb-4 text-sm text-gray-500">{products.length} items found</p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
