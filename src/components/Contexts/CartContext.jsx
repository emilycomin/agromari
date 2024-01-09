import { createContext, useState } from "react";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  //count do item count, quantidade de produtos que o cliente escolheu
  const [count, setCount] = useState(Number);
  //itens do array do carrinho
  const [cartItems, setCartItems] = useState([]);
  //variavel para abrir e fechar o carrinho de compras na barra lateral
  const [isCartVisible, setiIsCartVisible] = useState(false);
  const [quantity, setQuantity] = useState(1);

  //variaves dos estados que serão mostrados em outros componentes
  const value = {
    count,
    setCount,
    cartItems,
    setCartItems,
    isCartVisible,
    setiIsCartVisible,
    quantity,
    setQuantity,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;
