import { TbShoppingBagMinus } from "react-icons/tb";
import styles from "./CartItems.module.css";
import FormatCurrency from "../utils/FormatCurrency";
import { useContext } from "react";
import { CartContext } from "../Contexts/CartContext";

//aqui é o array dos items dentro do carrinho
export default function CartItems({ item }) {
  const { id, image, titulo, preco } = item;
  const { cartItems, setCartItems } = useContext(CartContext);

  function handdleRemoveItem() {
    const removeItem = cartItems.filter((item) => item.id != id);
    setCartItems(removeItem);
  }

  return (
    <>
      <div className={styles.itemCartInfo}>
        <img src={image} />
        <div className={styles.tituloCart}>
          <h2>{titulo} </h2>
          <h3>{FormatCurrency(preco)}</h3>
        </div>
        <TbShoppingBagMinus
          className={styles.cartRemoveItem}
          onClick={handdleRemoveItem}
        />
      </div>
    </>
  );
}
