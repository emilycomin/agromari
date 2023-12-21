import styles from "./ItemDetail.module.css";
import ItemFilter from "../ItemFilter/ItemFilter";

export default function ItemDetail({ item }) {
  return (
    <div className={styles.itemDetailContent}>
      <img src={item.image} />
      <div className={styles.itemInfo}>
        <h2 className={styles.itemTitulo}>{item.titulo}</h2>
        <h3 className={styles.itemPreco}>{item.preco}</h3>
        <div className={styles.itemDescription}>
          <p>{item.texto}</p>
        </div>
        <div className={styles.buyButtons}>
          {/* <ItemCount initial={1} /> */}
          <a href="#" className={styles.cardButtonBuy}>
            Adicionar ao carrinho
          </a>
        </div>
      </div>
    </div>
  );
}
