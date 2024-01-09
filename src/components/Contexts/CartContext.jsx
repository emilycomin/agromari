import { createContext, useState } from "react";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [count, setCount] = useState(Number);
  const [cartItems, setCartItems] = useState([]);
  const [isCartVisible, setiIsCartVisible] = useState(false);

  const value = {
    count,
    setCount,
    cartItems,
    setCartItems,
    isCartVisible,
    setiIsCartVisible,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;
