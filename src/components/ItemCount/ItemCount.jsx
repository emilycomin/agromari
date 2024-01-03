import { useState } from "react";
import styles from "./ItemCount.module.css";
// resolver problema dos números.... tem que acrescentar até o estoque
// e diminuir até 1

export default function ItemCount({ addProduto, tirarProduto }) {
  const [count, setCount] = useState();
  return (
    <div className={styles.botoesCarrinho}>
      <input
        type="text"
        value={count}
        onChange={(e) => setCount(e.target.value)}
      />
      <div className={styles.plusMinusButton}>
        <button onClick={addProduto}>+</button>
        <button onClick={tirarProduto}>-</button>
      </div>
    </div>
  );
}
