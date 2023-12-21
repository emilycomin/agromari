import ItemCount from "../ItemCount/ItemCount";
import Racao from "../../img/Racoes/0001.jpg";
import styles from "./ItemDetail.module.css";
import ItemFilter from "../ItemFilter/ItemFilter";

export default function ItemDetail({ stock }) {
  return (
    <fragment>
      <ItemFilter />
      <div className={styles.itemDetailContent}>
        <img src={Racao} />
        <div className={styles.itemInfo}>
          <h2 className="itemTitulo">Ração</h2>
          <h3 className={styles.itemPreco}>Preço 59,90</h3>
          <div className={styles.itemDescription}>
            <p>Texto que descreve o produto</p>
          </div>
          <div className={styles.buyButtons}>
            <ItemCount initial={1} />
            <a href="#" className={styles.cardButtonBuy}>
              Adicionar ao carrinho
            </a>
          </div>
        </div>
      </div>
    </fragment>
  );
}
