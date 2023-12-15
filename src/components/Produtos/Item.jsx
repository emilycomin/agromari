import React from "react";
import styles from "./Item.module.css";

export default function Item({ titulo, preco, image, texto }) {
  return (
    //aqui onde vai se mostrar os card com os produtos

    <div className={styles.scardContainer}>
      <div className={styles.card}>
        <img src={image} className="cadrImage" />
        <div className={styles.cardBody}>
          <h5 className="cardTitle">{titulo}</h5>
          <h4>{preco}</h4>
          <p className="cardText">{texto}</p>
          <a href="#" className="cardButtonBuy">
            Adicionar ao carrinho
          </a>
        </div>
      </div>
    </div>
  );
}
