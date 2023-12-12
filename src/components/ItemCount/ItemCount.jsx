import { useState } from "react";

export default function ItemCount({ stock, initial, onAdd }) {
  const [count, setCount] = useState(1);

  function addClick() {
    setCount(count + 1);
    console.log({ count });
  }
  return (
    <>
      <button onClick={addClick}>Adicionar ao Carrinho</button>
      <div>{count}</div>
    </>
  );
}
