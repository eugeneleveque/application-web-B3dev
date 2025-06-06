import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="rounded-lg shadow-md hover:shadow-xl transition border border-gray-200 p-4 bg-white">
      <Link to={`/products/${product.id}`} className="block text-center">
        <img
          src={product.image}
          alt={product.title}
          className="h-56 w-full object-contain mb-4"
        />
        <h4 className="text-md font-semibold text-gray-800 mb-2 truncate">
          {product.title}
        </h4>
        <p className="text-red-600 font-bold text-lg">
          {product.price.toFixed(2)} €
        </p>
      </Link>
    </div>
  );
};

export default ProductCard;
