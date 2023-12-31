import { createContext, useState } from "react";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState("Olá");
  const [cartItems, setCartItems] = useState([]);
  const [isCartVisible, setiIsCartVisible] = useState(false);

  const value = {
    cartProducts,
    setCartProducts,
    cartItems,
    setCartItems,
    isCartVisible,
    setiIsCartVisible,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;
