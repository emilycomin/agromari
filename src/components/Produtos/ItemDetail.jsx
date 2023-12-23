import styles from "./ItemDetail.module.css";
import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";

export default function ItemDetail({ item }) {
  //usando o estado para modificar o value do input pelos botões
  const [count, setCount] = useState(1);

  // para somar ou diminuir os botões do produto
  function addProduto() {
    if (count < item.stock) {
      setCount(count + 1);
    }
  }
  function tirarProduto() {
    if (count > 1) {
      setCount(count - 1);
    }
  }

  function addOnCart() {
    console.log("adicionado ao carrinho");
    console.log(item);
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
          <ItemCount
            initial={setCount}
            stock={item.stock}
            addProduto={addProduto}
            tirarProduto={tirarProduto}
            count={count}
          />
          <button className={styles.cardButtonBuy} onClick={addOnCart}>
            Adicionar ao carrinho
          </button>
        </div>
      </div>
    </div>
  );
}
