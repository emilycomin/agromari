import styles from "./FinalizarCompra.module.css";
//componentes
import NavBar from "../NavBar/NavBar";
import CartItems from "../CartWidjet/CartItems";
//React
import { useContext } from "react";
import { CartContext } from "../Contexts/CartContext";

export default function FinalizarCompra() {
  const { cartItems } = useContext(CartContext);

  return (
    <div className={styles.finalizarCompraContainer}>
      <div className={styles.finalizarComprasContent}>
        {cartItems.map((cartItem) => {
          return <CartItems item={cartItem} key={cartItem.id} />;
        })}
      </div>
      <div className={styles.resumoCompra}>
        <div className={styles.resumoCompraHeader}></div>
        <div className={styles.resumoComraContext}>
          <p>Subtotal: </p> <span>{}</span>
          <p>Frete: </p> <span>{}</span>
          <p>Total: </p> <span>{}</span>
        </div>
      </div>
    </div>
  );
}
