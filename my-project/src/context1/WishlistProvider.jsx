import React, { useState } from "react";
import { WishlistContext } from "./WishlistContext";

const WishlistProvider = ({ children }) => {

  const [wishlist, setWishlist] = useState(() => {
    try {
      const savedWishlist = localStorage.getItem("cc_wishlist");
      return savedWishlist ? JSON.parse(savedWishlist) : [];
    } catch {
      return [];
    }
  });

  const addWishlist = (product) => {

    const updated = [...wishlist, product];

    setWishlist(updated);

    localStorage.setItem("cc_wishlist", JSON.stringify(updated));
  };

  const removeWishlist = (id) => {

    const updated = wishlist.filter((item) => item.id !== id);

    setWishlist(updated);

    localStorage.setItem("cc_wishlist", JSON.stringify(updated));
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addWishlist, removeWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

export default WishlistProvider;