import { useState } from "react";

export default function ItemCount({ stock, initial, onAdd }) {
  const [count, setCount] = useState(1);

  function addProduto() {
    setCount(count + 1);
    console.log({ count });
  }
  function tirarProduto() {
    setCount(count - 1);
    console.log({ count });
  }

  return (
    <>
      <div className="comprarContent">
        <div className="quantidade">
          <button className="adicionar" onClick={addProduto}>
            +
          </button>
          <input
            type="text"
            className="quantidadeProduto"
            value={count}
            max={stock}
            id=""
          />
          <button className="remover" onClick={tirarProduto}>
            -
          </button>
        </div>
        <button className="addCarrinho">Adicionar no carrinho</button>
      </div>
    </>
  );
}
