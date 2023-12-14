import React from "react";

import Item from "../Produtos/Item";
import ItemList from "../Produtos/ItemList";

function ItemListContainer() {
  return (
    <div className="container">
      <Item nome="Ração" price="R$ 59,90" text="Ração de 1kg" />
      <Item nome="Ração" price="R$ 59,90" text="Ração de 1kg" />
      <Item nome="Ração" price="R$ 59,90" text="Ração de 1kg" />
      <button></button>
      <ItemList id={1} />
    </div>
  );
}
export default ItemListContainer;
