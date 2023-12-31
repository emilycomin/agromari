import React from "react";
import styles from "./ItemCard.module.css";
import { Link } from "react-router-dom";
import ButtonText from "../ButtonText/ButtonText";
import FormatCurrency from "../utils/FormatCurrency";

export default function Item({ item }) {
  const { id, image, titulo, preco, texto } = item;

  return (
    //aqui onde vai se mostrar os card com os produtos
    <div className={styles.cardContainer}>
      <Link to={`/produtos/${id}`}>
        <div className={styles.card}>
          <img src={image} className="cadrImage" />
          <div className={styles.cardBody}>
            <h5 className="cardTitle">{titulo}</h5>
            <h4>{FormatCurrency(preco)}</h4>
            <p className="cardText">{texto}</p>
            <div className={styles.buyButtons}>
              <ButtonText texto={"Detalhes do produto"} />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
