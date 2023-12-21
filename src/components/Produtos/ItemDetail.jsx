import styles from "./ItemDetail.module.css";
import ItemCount from "../ItemCount/ItemCount";

export default function ItemDetail({ item }) {
  function addOnCart() {
    console.log("adicionado ao carrinho");
  }

  return (
    <div className={styles.itemDetailContent}>
      <img src={item.image} />
      <div className={styles.itemInfo}>
        <h2 className={styles.itemTitulo}>{item.titulo}</h2>
        <h3 className={styles.itemPreco}>R$ {item.preco}</h3>
        <div className={styles.itemDescription}>
          <p>{item.texto}</p>
        </div>
        <div className={styles.buyButtons}>
          <ItemCount initial={1} stock={item.stock} />
          <button className={styles.cardButtonBuy} onClick={addOnCart}>
            Adicionar ao carrinho
          </button>
        </div>
      </div>
    </div>
  );
}
