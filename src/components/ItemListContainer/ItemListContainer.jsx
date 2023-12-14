import React from "react";
import Item from "../Produtos/Item";
import ItemList from "../Produtos/ItemList";

function ItemListContainer() {
  return (
    <div className="container">
      <Item nome="Ração" price="R$ 59,90" text="Ração de 1kg" />
      <Item nome="Ração" price="R$ 59,90" text="Ração de 1kg" />

      <ItemList id={4} />
      <button> olá</button>
    </div>
  );
}
export default ItemListContainer;
