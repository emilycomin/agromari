import React from "react";
import styles from "./ItemCard.module.css";
import ItemFilter from "../ItemFilter/ItemFilter";

export default function Item({ titulo, preco, image, texto, stock }) {
  return (
    //aqui onde vai se mostrar os card com os produtos
    <fragment>
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <img src={image} className="cadrImage" />
          <div className={styles.cardBody}>
            <h5 className="cardTitle">{titulo}</h5>
            <h4>R$ {preco}</h4>
            <p className="cardText">{texto}</p>
            <div className={styles.buyButtons}>
              {/* <ItemCount initial={1} stock={stock} /> */}
              <a href="#" className={styles.cardButtonBuy}>
                Adicionar ao carrinho
              </a>
            </div>
          </div>
        </div>
      </div>
    </fragment>
  );
}
