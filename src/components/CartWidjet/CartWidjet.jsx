import "./CartWidjet.css";
import ButtonText from "../ButtonText/ButtonText";
import { useContext } from "react";
import { CartContext } from "../Contexts/CartContext";
import CartItems from "./CartItems";
import FormatCurrency from "../utils/FormatCurrency";

//estrutura e funções do carrinho que mostra o array de itens
export default function CartWidjet({ item }) {
  //pegando os dados do context
  const { cartItems, isCartVisible, setCartItems, count } =
    useContext(CartContext);

  const total = cartItems.reduce((acc, items) => items.preco + acc, 0);
  const totalPrice = total * count;

  function handleClearCart() {
    setCartItems([]);
  }

  return (
    <div className={`cartContent ${isCartVisible ? "cartContentVisible" : ""}`}>
      <div className="cartContentItem">
        {/* identificando se o carrinho está vazio ou não */}
        {/* quando não estiver vazio, passando os dados do array por map.  */}
        {cartItems.length === 0 ? (
          <p>Seu carrinho está vazio</p>
        ) : (
          cartItems.map((cartItem) => {
            return <CartItems item={cartItem} key={cartItem.id} />;
          })
        )}
      </div>
      <div className="cartResume">
        <h4>Valor Total: </h4>
        {/* chamando a função criada para formatar os valores */}
        <span>{FormatCurrency(totalPrice)}</span>
      </div>
      <div className="cartButton">
        <ButtonText texto={"Limpar carrinho"} onCLick={handleClearCart} />
        <ButtonText texto={"Finalizar Compra"} />
      </div>
    </div>
  );
}
