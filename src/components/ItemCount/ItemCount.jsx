import styles from "./ItemCount.module.css";
// resolver problema dos números.... tem que acrescentar até o estoque
// e diminuir até 1

export default function ItemCount({
  stock,
  initial,
  addProduto,
  tirarProduto,
  count,
}) {
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
