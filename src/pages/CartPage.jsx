import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
    const {
        cart,
        increaseQty,
        decreaseQty,
        removeFromCart,
        clearCart,
        totalItems,
        totalPrice
    } =useCart();
  console.log(cart);
  const handleCheckout = () => {
    clearCart();
    navigate("/checkout-success");
  };
  const navigate = useNavigate();

//   const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
//   const totalPrice = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
      {/* Panier */}
      <div className="md:col-span-2 space-y-6">
        {cart.length === 0 ? (
          <p className="text-lg text-center text-gray-500">Votre panier est vide.</p>
        ) : (
          cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border-b pb-4"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-20 w-20 object-contain"
                />
                <div>
                  <h4 className="text-md font-semibold text-yellow-800 truncate w-52">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {item.price.toFixed(2)} € x {item.qty} :{" "}
                    <span className="text-red-600 font-bold">
                      {(item.price * item.qty).toFixed(2)} €
                    </span>
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => decreaseQty(item.id)}
                  className="text-2xl text-red-500 hover:text-red-700"
                >
                  –
                </button>
                <span className="text-lg font-semibold">{item.qty}</span>
                <button
                  onClick={() => increaseQty(item.id)}
                  className="text-2xl text-green-600 hover:text-green-800"
                >
                  +
                </button>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-xl text-red-600 hover:text-red-800"
                >
                  🗑
                </button>
              </div>
            </div>
          ))
        )}

        {/* Actions bas de panier */}
        {cart.length > 0 && (
          <div className="flex justify-between mt-6">
            <Link
              to="/products"
              className="border border-yellow-500 text-yellow-600 px-4 py-2 rounded hover:bg-yellow-50"
            >
              ← Voir les produits
            </Link>
            <button
              onClick={clearCart}
              className="border border-red-500 text-red-600 px-4 py-2 rounded hover:bg-red-50"
            >
              🗑 Vider le panier
            </button>
          </div>
        )}
      </div>

      {/* Résumé */}
      <div className="border border-green-600 rounded-lg p-6 h-fit shadow">
        <h3 className="text-xl font-semibold mb-4 text-green-700">Résumé</h3>
        <div className="space-y-2 text-md">
          <p>
            🧺 <span className="text-gray-600">Articles :</span>{" "}
            <span className="font-bold">{totalItems}</span>
          </p>
          <p>
            💰 <span className="text-gray-600">Total :</span>{" "}
            <span className="text-red-600 font-bold text-lg">
              {totalPrice.toFixed(2)} €
            </span>
          </p>
        </div>

        <button
            onClick={handleCheckout}
            className="w-full mt-6 bg-green-600 text-white py-2 rounded hover:bg-green-500 transition">
            Valider la commande
        </button>
      </div>
    </div>
  );
};

export default CartPage;
