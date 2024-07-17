//estilos
import styles from "./FinalizarCompra.module.css";
import Swal from "sweetalert2";
//componentes
import CartItems from "../CartWidjet/CartItems";
import ButtonText from "../ButtonText/ButtonText";
import FormatCurrency from "../utils/FormatCurrency";
//React
import { useContext } from "react";
import { CartContext } from "../Contexts/CartContext";

export default function FinalizarCompra() {
  const { cartItems, setCartItems } = useContext(CartContext);
  const totalProdutos = cartItems.reduce((acc, items) => items.preco + acc, 0);
  const totalCarrinho = totalProdutos + 19.9;

  //gera número aleatorios para o numero do pedido
  function handdlePedido() {
    let min = 1000;
    let max = 9999;
    const numeroDoPedido = Math.floor(Math.random() * (max - min + 1)) + min;
    if (cartItems == 0) {
      Swal.fire({
        title: "Você não tem produtos no carrinho",
        icon: "error",
      });
    } else {
      Swal.fire({
        title: `Pedido nº ${numeroDoPedido} encaminhado com sucesso!`,
        icon: "success",
      });
      setCartItems([]);
      localStorage.clear();
    }
  }

  return (
    <div className={styles.finalizarCompraContainer}>
      <div className={styles.finalizarComprasContent}>
        {cartItems.map((cartItem) => {
          return (
            <CartItems
              className={styles.cartItemFinalizarCompra}
              item={cartItem}
              key={cartItem.id}
            />
          );
        })}
      </div>

      <div className={styles.dadosCompra}>
        <div className={styles.resumoCompraHeader}>
          <div className={styles.resumoComraContext}>
            <p>Subtotal: {FormatCurrency(totalProdutos)}</p>
            <p>Frete: {FormatCurrency(19.9)}</p>
            <p>Total: {FormatCurrency(totalCarrinho)}</p>
          </div>
        </div>
        <div className={styles.dadosCliente}>
            <form>
              <label> Nome: </label>
              <input type="text" placeholder="Digite seu nome" />
              <label> E-mail: </label>
              <input type="email" placeholder="Digite seu e-mail" />
            </form>
        </div>
        {/* validar se o nome e email estiver preenchido */}
        <ButtonText texto={"Enviar Pedido"} event={handdlePedido} />
      </div>
    </div>
  );
}
