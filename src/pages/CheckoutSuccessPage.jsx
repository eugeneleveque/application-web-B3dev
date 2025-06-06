import React from "react";
import { Link } from "react-router-dom";

const CheckoutSuccessPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[80vh] text-center px-4">
      <h1 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-6">
        ✅ Checkout Successfully
      </h1>
      <Link
        to="/products"
        className="border border-green-600 text-green-600 px-6 py-2 rounded hover:bg-green-50 font-semibold transition"
      >
        Back to shop
      </Link>
    </div>
  );
};

export default CheckoutSuccessPage;
