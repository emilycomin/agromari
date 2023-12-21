import React from "react";
import styles from "./ItemCard.module.css";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";

export default function Item({ item }) {
  return (
    //aqui onde vai se mostrar os card com os produtos
    <div className={styles.cardContainer}>
      <div className={styles.card}>
        <img src={item.image} className="cadrImage" />
        <div className={styles.cardBody}>
          <h5 className="cardTitle">{item.titulo}</h5>
          <h4>R$ {item.preco}</h4>
          <p className="cardText">{item.texto}</p>
          <div className={styles.buyButtons}>
            <ItemCount initial={1} stock={item.stock} />
            <Link to={`/produtos/${item.id}`}>
              <button className={styles.cardButtonBuy}>Detalhes</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
