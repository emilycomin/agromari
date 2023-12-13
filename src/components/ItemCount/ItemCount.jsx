import { useState } from "react";
import Button from "../ButtonCart/ButtonCart";
import "./ItemCount.css";
// resolver problema dos números.... tem que acrescentar até o estoque
// e diminuir até 1

export default function ItemCount({ stock, initial }) {
  //usando o estado para modificar o value do input pelos botões
  const [count, setCount] = useState(initial);

  // para somar ou diminuir os botões do produto
  function addProduto() {
    if (count < stock) {
      setCount(count + 1);
    }
  }

  function tirarProduto() {
    if (count > 1) {
      setCount(count - 1);
    }
  }
  function addOnCart() {
    console.log(count);
  }
  //aqui dá pra fazer mais um função para adicionar o
  //produto no carrinho e chamar ela no botão do cart separadamente.

  return (
    <div>
      <div className="botoesCarrinho">
        <input type="text" value={count} />
        <div className="plusMinusButton">
          <Button className="item" event={addProduto} text="+" />
          <Button className="item" event={tirarProduto} text="-" />
        </div>
      </div>
      <Button
        className="cart"
        onClick={addOnCart}
        text="Adicionar ao carrinho"
      />
    </div>
  );
}
