import { TbShoppingBagMinus } from "react-icons/tb";
import styles from "./CartItems.module.css";
import FormatCurrency from "../utils/FormatCurrency";
import { useContext, useState } from "react";
import { CartContext } from "../Contexts/CartContext";

//aqui é o array dos items dentro do carrinho
export default function CartItems({ item }) {
  const { id, image, titulo, preco } = item;
  const { cartItems, setCartItems } = useContext(CartContext);

  function handdleRemoveItem() {
    const removeItem = cartItems.filter((item) => item.id != id);
    setCartItems(removeItem);
  }

  //tenho que pegar o valor do count para fazer a conta no carrinho
  //como pegar esse valor?
  return (
    <div className={styles.itemCartInfo}>
      <img src={image} />
      <div className={styles.tituloCart}>
        <h2>{titulo} </h2>
        <h3>{FormatCurrency(preco)}</h3>
        <div className={styles.botoesCarrinho}></div>
      </div>
      <TbShoppingBagMinus
        className={styles.cartRemoveItem}
        onClick={handdleRemoveItem}
      />
    </div>
  );
}
