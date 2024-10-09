import { IoMdCloseCircle } from "react-icons/io";
import styles from "./CartItems.module.css";
import FormatCurrency from "../utils/FormatCurrency";
import { useContext, useState } from "react";
import { CartContext } from "../Contexts/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import Swal from "sweetalert2";

//aqui é o array dos items dentro do carrinho
export default function CartItems({ item }) {
  const { id, image, titulo, preco, stock } = item;
  const { cartItems, setCartItems } = useContext(CartContext);

  function handdleRemoveItem() {
    const removeItem = cartItems.filter((item) => item.id != id);
    if (cartItems.length == 1) {
      localStorage.clear();
      setCartItems(removeItem);
    } else {
      setCartItems(removeItem);
    }
    Swal.fire({
      title: "Produto excluido com sucesso",
      icon: "success",
      timer: 1000,
      showConfirmButton: false,
    });
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
      </div>
    </div>
  );
}
