import "./CartWidjet.css";
import ButtonText from "../ButtonText/ButtonText";
import { useContext } from "react";
import { CartContext } from "../Contexts/CartContext";
import CartItems from "./CartItems";
import FormatCurrency from "../utils/FormatCurrency";
import { useState } from "react";

//estrutura e funções do carrinho que mostra o array de itens
export default function CartWidjet({ item }) {
  //pegando os dados do context
  const { cartItems, isCartVisible, setCartItems } = useContext(CartContext);

  const total = cartItems.reduce((acc, items) => items.preco + acc, 0);

  function handleClearCart() {
    setCartItems([]);
  }

  return (
    <div className={`cartContent ${isCartVisible ? "cartContentVisible" : ""}`}>
      <div className="cartContentItem">
        {/* passando os dados do array por map.  */}
        {cartItems.map((cartItem) => {
          return <CartItems item={cartItem} key={cartItem.id} />;
        })}
      </div>
      <div className="cartResume">
        <h4>Valor Total: </h4>
        {/* chamando a função criada para formatar os valores */}
        <span>{FormatCurrency(total)}</span>
      </div>
      <div className="cartButton">
        <ButtonText texto={"Limpar carrinho"} onCLick={handleClearCart} />
        <ButtonText texto={"Finalizar Compra"} />
      </div>
    </div>
  );
}
