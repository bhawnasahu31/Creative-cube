import React, { useState } from "react";
import { CartContext } from "./CartContext";

const CartProvider = ({ children }) => {

  const [cart, setCart] = useState(() => {
    try {
      const savedCart = localStorage.getItem("cc_cart");
      return savedCart ? JSON.parse(savedCart) : [];
    } catch {
      return [];
    }
  });

  const addToCart = (product) => {

    const updated = [...cart, product];

    setCart(updated);

    localStorage.setItem("cc_cart", JSON.stringify(updated));
  };

  const removeFromCart = (id) => {

    const updated = cart.filter((item) => item.id !== id);

    setCart(updated);

    localStorage.setItem("cc_cart", JSON.stringify(updated));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;