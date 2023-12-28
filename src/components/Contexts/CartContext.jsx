import { createContext, useState } from "react";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);

  function addOnCart(item) {
    setCartProducts([...cartProducts, item]);
  }

  return (
    <CartContext.Provider value={(cartProducts, addOnCart)}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
