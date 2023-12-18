import ItemCount from "../ItemCount/ItemCount";
import Racao from "../../img/Racoes/0001.jpg";
import styles from "./ItemDetail.module.css";

export default function ItemDetail() {
  return (
    <div className={styles.itemDetailContent}>
      <img src={Racao} />
      <div className={styles.ItemInfo}>
        <h2 className="itemTitulo">Ração</h2>
        <h3 className={styles.itemPreco}>Preço 59,90</h3>
        <div className={styles.itemDescription}>
          <p>Texto que descreve o produto</p>
        </div>
        <ItemCount />
      </div>
    </div>
  );
}
