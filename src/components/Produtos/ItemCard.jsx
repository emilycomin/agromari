import React, { useContext, useEffect } from "react";
import styles from "./ItemCard.module.css";
import { Link, useParams } from "react-router-dom";
import ButtonText from "../ButtonText/ButtonText";
import FormatCurrency from "../utils/FormatCurrency";
import { CartContext } from "../Contexts/CartContext";
import { BsBasket } from "react-icons/bs";

export default function Item({ item }) {
  const { cartItems, setCartItems, isCartVisible, setIsCartVisible } =
    useContext(CartContext);
  const { preco, titulo, image, id } = item;

  function handleAddOnCart() {
    setCartItems([...cartItems, item]);
    localStorage.setItem("cartItens", JSON.stringify(cartItems));
  }

  return (
    //aqui onde vai se mostrar os card com os produtos
    <div className={styles.cardContainer}>
      <div className={styles.card}>
        <Link to={`/produtos/${id}`}>
          <img src={image} className={styles.cardImage} />
        </Link>
        <div className={styles.cardBody}>
          <h5 className="cardTitle">{titulo}</h5>
          <h4>{FormatCurrency(preco)}</h4>
          {/* <p className="cardText">{texto}</p> */}
          <div className={styles.buyButtons}>
            <Link to={`/produtos/${id}`}>
              <ButtonText
                texto={"Detalhes do produto"}
                className={styles.detailItemButton}
              />
            </Link>
            <button className={styles.cardButtonBuy} onClick={handleAddOnCart}>
              <BsBasket />
              <span>+</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
