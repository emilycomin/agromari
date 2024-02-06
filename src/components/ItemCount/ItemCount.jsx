import { useState } from "react";
import styles from "./ItemCount.module.css";

export default function ItemCount(item) {
  const [count, setCount] = useState(1);

  // para somar ou diminuir os botões do produto
  function addProduto() {
    if (count < item.stock) {
      setCount(count + 1);
    }
  }

  function tirarProduto(e) {
    if (count > 1) {
      setCount(count - 1);
    }
  }

  return (
    <div className={styles.botoesCarrinho}>
      <input type="text" value={count} />
      <div className={styles.plusMinusButton}>
        <button onClick={addProduto}>+</button>
        <button onClick={tirarProduto}>-</button>
      </div>
    </div>
  );
}
