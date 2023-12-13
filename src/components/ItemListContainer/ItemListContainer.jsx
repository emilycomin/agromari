import React from "react";
import "./ItemListContainer.css";
import ItemCount from "../ItemCount/ItemCount";
import Images from "../../img/Racoes/0002.jpg";

function ItemListContainer(props) {
  return (
    <div className="card">
      <img
        src={Images}
        className="align-self-center"
        alt=""
        height={100}
        width={50}
      />
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <h4>{props.price}</h4>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
      <ItemCount stock={3} initial={1} />
    </div>
  );
}
export default ItemListContainer;
