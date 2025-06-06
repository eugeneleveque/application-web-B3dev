import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useCart } from "../context/CartContext"; // ✅ ajoute ceci

const SingleProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [qty, setQty] = useState(1);
  const { addToCart } = useCart(); // ✅ ajoute ceci


  useEffect(() => {
    axios(`http://localhost:3000/products/${id}`).then((res) =>
    // console.log("image path:", res.data.image),

      setProduct(res.data)
    );
  }, [id]);

  const handleAddToCart = () => {
    console.log("Ajout au panier :", product, qty); // ← test console
    if (!product) return;
    addToCart(product, qty);
    navigate("/cart"); // 🔁 redirection après ajout

  };

  if (!product) return <p className="text-center mt-10">Chargement...</p>;

  return (
    <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-12">
      {/* Image */}
      <div className="bg-white rounded-xl p-4 shadow-md flex items-center justify-center">
        <img
          src={product.image}
          alt={product.title}
          className="h-80 object-contain"
        />
      </div>

      {/* Infos */}
      <div className="flex flex-col gap-4">
        <button
          onClick={() => navigate(-1)}
          className="self-start border border-red-500 text-red-500 px-3 py-1 rounded hover:bg-red-50 text-sm"
        >
          ← Retour aux produits
        </button>

        <h1 className="text-3xl font-bold text-yellow-800">{product.title}</h1>
        <p className="text-lg font-semibold text-green-700">
          Prix : <span className="text-red-600">{product.price.toFixed(2)} €</span>
        </p>

        <p className="text-sm text-gray-600">
          <span className="font-semibold text-green-700">Catégorie :</span>{" "}
          {product.category}
        </p>

        <p className="text-gray-700 leading-relaxed">{product.description}</p>

        {/* Quantité */}
        <div className="flex items-center gap-4 mt-4">
          <button
            onClick={() => qty > 1 && setQty(qty - 1)}
            className="text-2xl text-red-500 hover:text-red-700"
          >
            –
          </button>
          <span className="text-lg font-semibold">{qty}</span>
          <button
            onClick={() => setQty(qty + 1)}
            className="text-2xl text-green-600 hover:text-green-800"
          >
            +
          </button>
        </div>

        <button
          onClick={handleAddToCart}
          className="mt-6 bg-yellow-500 hover:bg-yellow-400 text-white px-6 py-2 rounded shadow-md transition"
        >
          🛒 Ajouter au panier
        </button>
      </div>
    </section>
  );
};

export default SingleProductPage;
