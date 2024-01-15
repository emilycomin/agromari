import styles from "./ItemDetail.module.css";
import ItemCount from "../ItemCount/ItemCount";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Contexts/CartContext";
import FormatCurrency from "../utils/FormatCurrency";
import { BsBasket } from "react-icons/bs";

export default function ItemDetail({ item }) {
  //usando o estado para modificar o value do input pelos botões
  const { id, image, texto, titulo, preco, count } = item;
  const { cartItems, setCartItems } = useContext(CartContext);

  function handleAddOnCart() {
    //find retorna o valore do array definido pela função, então irá retornar o item que tem o id igual.
    const agrupaProduto = cartItems.find((item) => item.id === id);
    //se o produto não está no carrinho, adiciona ele.
    setCartItems([...cartItems, item]);
    //se já estiver mudar a quantidade

    // verificar se o produto está disponivel conforme o estoque.
  }

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

        <h3 className={styles.itemPreco}>{FormatCurrency(preco)}</h3>
        <div className={styles.buyButtons}>
          <ItemCount initial={1} stock={item.stock} />
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
