import { IoMdCloseCircle } from "react-icons/io";
import styles from "./CartItems.module.css";
import FormatCurrency from "../utils/FormatCurrency";
import { useContext, useState } from "react";
import { CartContext } from "../Contexts/CartContext";
import ItemCount from "../ItemCount/ItemCount";

//aqui é o array dos items dentro do carrinho
export default function CartItems({ item }) {
  const { id, image, titulo, preco, stock } = item;
  const { cartItems, setCartItems } = useContext(CartContext);

  function handdleRemoveItem() {
    const removeItem = cartItems.filter((item) => item.id != id);
    setCartItems(removeItem);
  }

  function handdleClickValue(e) {
    console.log(e);
  }

  return (
    <div className={styles.itemCartInfo}>
      <img src={image} />
      <div className={styles.tituloCart}>
        <h2>{titulo} </h2>
        <h3>{FormatCurrency(preco)}</h3>
      </div>
      <div className={styles.botoesCarrinho}>
        <IoMdCloseCircle
          color="#ec3333"
          className={styles.cartRemoveItem}
          onClick={handdleRemoveItem}
        />
        <ItemCount initial={1} stock={stock} onChange={handdleClickValue} />
      </div>
    </div>
  );
}
