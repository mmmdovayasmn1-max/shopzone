import { createContext, useContext, useState } from "react";

const WishlistContext = createContext();

export function WishlistProvider({ children }) {
  const [wishlistItems, setWishlistItems] = useState([]);

  const toggleWishlist = (product) => {
    setWishlistItems((prevItems) => {
      const exists = prevItems.some(
        (item) => item.id === product.id
      );

      if (exists) {
        return prevItems.filter(
          (item) => item.id !== product.id
        );
      }

      return [...prevItems, product];
    });
  };

  const isInWishlist = (productId) => {
    return wishlistItems.some(
      (item) => item.id === productId
    );
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlistItems,
        toggleWishlist,
        isInWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  return useContext(WishlistContext);
}

export default WishlistProvider;