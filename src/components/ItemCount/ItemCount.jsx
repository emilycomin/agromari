import { useState } from "react";
import styles from "./ItemCount.module.css";
// resolver problema dos números.... tem que acrescentar até o estoque
// e diminuir até 1

export default function ItemCount({ stock, initial }) {
  //usando o estado para modificar o value do input pelos botões
  const [count, setCount] = useState(initial);

  // para somar ou diminuir os botões do produto
  function addProduto() {
    if (count < stock) {
      setCount(count + 1);
    }
  }

  function tirarProduto() {
    if (count > 1) {
      setCount(count - 1);
    }
  }

  //aqui dá pra fazer mais um função para adicionar o
  //produto no carrinho e chamar ela no botão do cart separadamente.

  return (
    <div className={styles.botoesCarrinho}>
      <input type="text" value={count} />
      <div className={styles.plusMinusButton}>
        <button onClick={addProduto}>+</button>
        <button onClick={tirarProduto}>-</button>
      </div>
      {/* <button
          className={styles.cartButton}
          onClick={addOnCart}
          Adicionar
          ao
          carrinho
        ></button> */}
    </div>
  );
}
