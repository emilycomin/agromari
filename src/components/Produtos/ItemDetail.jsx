import styles from "./ItemDetail.module.css";
import ItemCount from "../ItemCount/ItemCount";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Contexts/CartContext";

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
  // pegando a função do CartContext.provider
  const { addOnCart } = useContext(CartContext);
  const [cart, setCart] = useState([]);

  function addItemOnCart() {
    console.log(item.titulo);
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
          {/* <Link to="/carrinho"> */}
          <button className={styles.cardButtonBuy} onClick={addItemOnCart}>
            Adicionar ao carrinho
          </button>
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
}
