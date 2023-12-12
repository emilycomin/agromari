import React from "react";
import "./ItemListContainer.css";

function ItemListContainer(props) {
  return (
    <div className="card">
      <img
        src="../../img/Racoes/0002.jpg"
        className="align-self-center"
        alt=""
        height={150}
        width={100}
      />
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <h4>{props.price}</h4>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <button> Adicionar ao carrinho</button>
      </div>
    </div>
  );
}
export default ItemListContainer;
