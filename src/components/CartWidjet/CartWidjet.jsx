import "./CartWidjet.css";
import { useContext, useEffect } from "react";
import { CartContext } from "../Contexts/CartContext";
//componentes
import ButtonText from "../ButtonText/ButtonText";
import CartItems from "./CartItems";
import FormatCurrency from "../utils/FormatCurrency";
// icones
import { IoCloseCircleOutline } from "react-icons/io5";
import { FaRegFaceSadCry } from "react-icons/fa6";
//React-Router
import { NavLink } from "react-router-dom";

//estrutura e funções do carrinho que mostra o array de itens
export default function CartWidjet({ count }) {
  //pegando os dados do context
  const { cartItems, isCartVisible, setIsCartVisible } =
  useContext(CartContext);
  //pegando dados do local storage
  const cartItensLocalStorage = JSON.parse(localStorage.getItem("cartItens"));
  useEffect(() => {
      console.log(cartItems);
  }, [cartItensLocalStorage])

  const total = cartItems.reduce((acc, items) => items.preco + acc, 0);

    
   //verificando se o carrinho está vazio antes de finalizar a compra! 
    //se o carrinho está vazio, direcionar para a página de profutos
    //se tiver item redirecionar para a página de pagamento.
  return (
    <div className={`cartContent ${isCartVisible ? "cartContentVisible" : ""}`}>
      <div className="cartHeader-ahgrs">
        <button onClick={() => setIsCartVisible(!isCartVisible)}>
          <IoCloseCircleOutline/>
        </button>
        <span>CARRINHO DE COMPRAS</span>
      </div>
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
          texto={"Fechar carrinho"}
          event={() => setIsCartVisible(!isCartVisible)}
        />
        {/* carrinho vazio não pode ir para tela de finalizar comprassss */}
         <NavLink to="/cart"> 
         <button 
            className="checkoutButton"  
            disabled={!cartItensLocalStorage}
            event={() => setIsCartVisible(!isCartVisible)} 
            >
              Finalizar Compra 
          </button>
      </NavLink>
      </div>
    </div>
  );
}
