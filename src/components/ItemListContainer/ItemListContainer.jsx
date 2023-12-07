import React from "react";
import "./ItemListContainer.css";

function ItemListContainer(props) {
  return (
    <div class="card">
      <img
        src="../../img/Racoes/0002.jpg"
        class="align-self-center"
        alt=""
        height={150}
        width={100}
      />
      <div class="card-body">
        <h5 class="card-title">{props.name}</h5>
        <h4>{props.price}</h4>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" class="btn btn-primary-color terciary-color">
          Adicionar ao carrinho
        </a>
      </div>
    </div>
  );
}
export default ItemListContainer;
