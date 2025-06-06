import React from "react";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    title: "Caillou de la Rage",
    image: "src/assets/ChatGPT_10_39_44.png", // 📌 adapte au bon chemin de ton image
    price: 4.9,
  },
  {
    id: 2,
    title: "Caillou Brillant Collector",
    image: "src/assets/ChatGPT_10_39_49.png",
    price: 12.5,
  },
  {
    id: 3,
    title: "Shuriken de la Montagne",
    image: "src/assets/ChatGPT_10_39_51.png",
    price: 9.8,
  },
];

const PopularProducts = () => {
  return (
    <section className="bg-yellow-50 mx-auto px-6 py-12">
      <h2 className="text-2xl font-semibold text-gray-700 mb-8 text-center">
        ⭐ Nos cailloux les plus populaires
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="rounded-xl border border-gray-200 bg-white shadow-md p-4 hover:shadow-lg transition"
          >
            <Link to={`/products/${product.id}`} className="flex flex-col items-center text-center">
              <img
                src={product.image}
                alt={product.title}
                className="h-40 object-contain mb-4"
              />
              <h3 className="text-md font-semibold text-yellow-800 mb-1">
                {product.title}
              </h3>
              <p className="text-red-600 font-bold">{product.price.toFixed(2)} €</p>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
