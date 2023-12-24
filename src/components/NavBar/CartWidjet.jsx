import styles from "./CartWidjet.module.css";
import Logo from "../../img/Racoes/0002.jpg";
import ItemCount from "../ItemCount/ItemCount";
import ButtonText from "../ButtonText/ButtonText";

export default function CartWidjet() {
  return (
    <div className={styles.cartContent}>
      <div className={styles.itemCartContent}>
        <div className={styles.itemCartInfo}>
          <img src={Logo} />
          <div className={styles.tituloCart}>
            <h2>Ração gatos filhotes</h2>
            <p>EXEMPLO DE COMO O CARRINHO SERÁ MOSTRADO</p>
          </div>
        </div>
        <div className={styles.itemCartPriceInfo}>
          <h3>R$ 59,90 </h3>
          <ItemCount />
        </div>
      </div>
      <div className={styles.buyButtons}>
        <ButtonText texto={"Finalizar Compra"} />
      </div>
    </div>
  );
}
