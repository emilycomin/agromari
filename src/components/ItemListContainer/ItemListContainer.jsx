import React from "react";

import Item from "../Produtos/Item";

function ItemListContainer() {
  return (
    <div className="container">
      <Item nome="Ração" price="R$ 59,90" text="Ração de 1kg" />
      <Item nome="Ração" price="R$ 59,90" text="Ração de 1kg" />
      <Item nome="Ração" price="R$ 59,90" text="Ração de 1kg" />
      <button></button>
    </div>
  );
}
export default ItemListContainer;
