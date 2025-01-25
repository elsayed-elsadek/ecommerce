import  { createContext, useContext, useEffect, useState } from "react";


const WishlistContext = createContext();

// eslint-disable-next-line react/prop-types
export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);


  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(storedWishlist);
  }, []);


  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const addToWishlist = (product) => {
    setWishlist((prev) => {
      if (!prev.some((item) => item.id === product.id)) {
        return [...prev, product];
      }
      return prev;
    });
  };


  const removeFromWishlist = (productId) => {
    setWishlist((prev) => prev.filter((item) => item.id !== productId));
  };


  const isInWishlist = (productId) => {
    return wishlist.some((item) => item.id === productId);
  };

  return (
    <WishlistContext.Provider
      value={{ wishlist, addToWishlist, removeFromWishlist, isInWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
};


export const useWishlist = () => useContext(WishlistContext);
