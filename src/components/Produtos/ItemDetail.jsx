import styles from "./ItemDetail.module.css";
import ItemCount from "../ItemCount/ItemCount";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

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
    console.log(count);
    Swal.fire({
      icon: "success",
      background: "#ffffff67",
      title: "Adicionado ao carrinho",
      showConfirmButton: false,
      timer: 1000,
    });

    // quando eu clicaar no botão add carrinho, quero salvar o item dentro de um novo array e mostrat no cartWidjet
    // e também importar o valor de count.
    // e mostrar na cestinha a quantidade de itens no carrinho
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
          <Link to="/carrinho">
            <button className={styles.cardButtonBuy} onClick={addOnCart}>
              Adicionar ao carrinho
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
