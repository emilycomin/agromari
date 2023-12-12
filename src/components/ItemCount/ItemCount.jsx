import { useState } from "react";
import Button from "../ButtonCart/ButtonCart";
// resolver problema dos números.... tem que acrescentar até o estoque
// e diminuir até 1
export default function ItemCount({ stock, initial }) {
  const [count, setCount] = useState(1);

  function addProduto() {
    setCount(count + 1);
  }
  function tirarProduto() {
    setCount(count - 1);
  }

  return (
    <div>
      <div className="BotõesCarrinho">
        <Button event={addProduto} text="+" />
        <input type="text" value={count} max={stock} />
        <Button event={tirarProduto} text="-" />
      </div>
      <Button text="Adicionar ao carrinho" />
    </div>
  );
}
