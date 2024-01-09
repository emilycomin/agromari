import styles from "./ItemDetail.module.css";
import ItemCount from "../ItemCount/ItemCount";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Contexts/CartContext";
import FormatCurrency from "../utils/FormatCurrency";
import { BsBasket } from "react-icons/bs";

export default function ItemDetail({ item }) {
  //usando o estado para modificar o value do input pelos botões
  const { id, image, texto, titulo, preco } = item;
  const { cartItems, setCartItems, count, setCount, quantity } =
    useContext(CartContext);

  function handleAddOnCart() {
    // verificar se existe ids iguais em um array
    const produtoDuplo = cartItems.find((item) => item.id === id);
    // verificar se o produto está disponivel conforme o estoque.

    //variavel dando true para quando há dois ids iguais
    console.log(produtoDuplo);
    if (produtoDuplo) {
      return { ...item, count: count + 1 };
    }
    return setCartItems([...cartItems, item]);
  }

  // NÃO COMPARTILHAR O COUNT COM USE CONTEXT, SE NÃO AFETA TODOS OS ITENS DO ARRAY E NÃO APENAS UM COMO DEVERIA.

  return (
    <div className={styles.itemDetailContent}>
      <img src={image} />
      <div className={styles.itemInfo}>
        <h2 className={styles.itemTitulo}>{titulo}</h2>
        <div className={styles.itemDescription}>
          <h5> DESCRIÇÃO</h5>
          <hr />
          <p>{texto}</p>
        </div>

        <h3 className={styles.itemPreco}>{preco}</h3>
        <div className={styles.buyButtons}>
          <ItemCount initial={setCount} stock={item.stock} count={count} />
          {/* <Link to="/carrinho"> */}
          <button className={styles.cardButtonBuy} onClick={handleAddOnCart}>
            Adicionar ao carrinho <BsBasket size={20} />
            <span>+</span>
          </button>
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
}
