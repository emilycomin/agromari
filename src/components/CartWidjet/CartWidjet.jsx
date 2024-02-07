import "./CartWidjet.css";
import { useContext } from "react";
import { CartContext } from "../Contexts/CartContext";
//componentes
import ButtonText from "../ButtonText/ButtonText";
import CartItems from "./CartItems";
import FormatCurrency from "../utils/FormatCurrency";
// icones
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaRegFaceSadCry } from "react-icons/fa6";
//React-Router
import { Link } from "react-router-dom";

//estrutura e funções do carrinho que mostra o array de itens
export default function CartWidjet({ count }) {
  //pegando os dados do context
  const { cartItems, isCartVisible, setIsCartVisible } =
    useContext(CartContext);

  const total = cartItems.reduce((acc, items) => items.preco + acc, 0);

  //pegando dados do local storage
  const cartItensLocalStorage = JSON.parse(localStorage.getItem("cartItens"));

  return (
    <div className={`cartContent ${isCartVisible ? "cartContentVisible" : ""}`}>
      <div className="cartHeader-ahgrs">
        <button onClick={() => setIsCartVisible(!isCartVisible)}>
          <FaArrowLeftLong size={25} />
        </button>
        {count}
        CARRINHO DE COMPRAS
      </div>
      <hr />
      <div className="cartContentItem">
        {/* identificando se o carrinho está vazio ou não */}
        {/* quando não estiver vazio, passando os dados do array por map.*/}
        {cartItensLocalStorage === null ? (
          <p>
            <FaRegFaceSadCry /> <br />
            Seu carrinho está vazio
          </p>
        ) : (
          cartItems.map((cartItem) => {
            return <CartItems item={cartItem} key={cartItem.id} />;
          })
        )}
      </div>
      <div className="cartResume">
        <h4>Valor Total: </h4>
        {/* chamando a função criada para formatar os valores */}
        <span>{FormatCurrency(total)}</span>
      </div>
      <div className="cartButton">
        <ButtonText
          texto={"Continuar Comprando"}
          event={() => setIsCartVisible(!isCartVisible)}
        />
        <Link to="/cart">
          <ButtonText
            texto={"Finalizar Compra"}
            event={() => setIsCartVisible(!isCartVisible)}
          />
        </Link>
      </div>
    </div>
  );
}
