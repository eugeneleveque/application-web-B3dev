import React, { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  // 🔁 Charger depuis localStorage au démarrage
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  // 💾 Sauvegarder dans localStorage à chaque mise à jour
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));

    const items = cart.reduce((sum, item) => sum + item.qty, 0);
    const price = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
    setTotalItems(items);
    setTotalPrice(price);
  }, [cart]);

  // ✅ Ajouter au panier
  const addToCart = (product, qty = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id == product.id);
      if (existing) {
        return prev.map((item) =>
          item.id == product.id ? { ...item, qty: item.qty + qty } : item
        );
      }
      return [...prev, { ...product, qty }];
    });
  };

  // ✅ Supprimer
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id != id));
  };

  // ✅ Augmenter quantité
  const increaseQty = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id == id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  // ✅ Diminuer quantité
  const decreaseQty = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id == id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item
      )
    );
  };

  // ✅ Vider panier
  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQty,
        decreaseQty,
        clearCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
