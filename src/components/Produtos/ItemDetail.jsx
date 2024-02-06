import styles from "./ItemDetail.module.css";
import ItemCount from "../ItemCount/ItemCount";
import { useContext } from "react";
import { CartContext } from "../Contexts/CartContext";
import FormatCurrency from "../utils/FormatCurrency";
import { BsBasket } from "react-icons/bs";

export default function ItemDetail({ item }) {
  const { preco, titulo, image, texto, stock } = item;
  //usando o estado para modificar o value do input pelos botões
  const { cartItems, setCartItems } = useContext(CartContext);

  function handleAddOnCart() {
    setCartItems([...cartItems, item]);
    localStorage.setItem("cartItens", JSON.stringify(cartItems));
  }

  return (
    <div className={styles.itemDetailContent}>
      <img src={image} />
      <div className={styles.itemInfo}>
        <h2 className={styles.itemTitulo}>{titulo}</h2>
        <div className={styles.itemDescription}>
          <h5> DESCRIÇÃO</h5>
          <hr />
          <p>{texto}</p>
        </div>
        <h3 className={styles.itemPreco}>{FormatCurrency(preco)}</h3>
        <div className={styles.buyButtons}>
          <ItemCount initial={1} stock={stock} />
          <button className={styles.cardButtonBuy} onClick={handleAddOnCart}>
            Adicionar ao carrinho <BsBasket size={20} />
            <span>+</span>
          </button>
        </div>
      </div>
    </div>
  );
}
