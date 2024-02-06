import { createContext, useState } from "react";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  //itens do array do carrinho
  const [cartItems, setCartItems] = useState([]);
  //variavel para abrir e fechar o carrinho de compras na barra lateral
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [count, setCount] = useState(1);

  //variaves dos estados que serão mostrados em outros componentes
  const value = {
    cartItems,
    setCartItems,
    isCartVisible,
    setIsCartVisible,
    quantity,
    setQuantity,
    count,
    setCount,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;
