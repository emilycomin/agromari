import "./CartWidjet.css";
import ButtonText from "../ButtonText/ButtonText";
import { useContext } from "react";
import { CartContext } from "../Contexts/CartContext";
import CartItems from "./CartItems";
import FormatCurrency from "../utils/FormatCurrency";

//estrutura e funções do carrinho que mostra o array de itens
export default function CartWidjet() {
  //pegando os dados do context
  const { cartItems, isCartVisible, setIsCartVisible } =
    useContext(CartContext);

  console.log(isCartVisible);
  //e passando por maps para mostrar na tela

  const total = cartItems.reduce((acc, items) => items.preco + acc, 0);

  return (
    <div className={`cartContent ${isCartVisible ? "cartContentVisible" : ""}`}>
      <div className="cartContentItem">
        {cartItems.map((cartItem) => {
          return <CartItems item={cartItem} key={cartItem.id} />;
        })}
      </div>
      <div className="cartResume">
        <h4>Valor Total: </h4>
        <span>{FormatCurrency(total)}</span>
      </div>
      <ButtonText texto={"Finalizar Compra"} />
    </div>
  );
}
