import styles from "./FinalizarCompra.module.css";
//componentes
import CartItems from "../CartWidjet/CartItems";
import ButtonText from "../ButtonText/ButtonText";
//React
import { useContext } from "react";
import { CartContext } from "../Contexts/CartContext";
import FormatCurrency from "../utils/FormatCurrency";

export default function FinalizarCompra() {
  const { cartItems } = useContext(CartContext);
  const totalProdutos = cartItems.reduce((acc, items) => items.preco + acc, 0);
  const totalCarrinho = totalProdutos + 19.9;

  //gera número aleatorios para o numero do pedido
  function gerarNumPedido(min, max) {
    const numeroDoPedido = Math.floor(Math.random() * (max - min) + min);
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
      <div className={styles.resumoCompra}>
        <div className={styles.resumoCompraHeader}></div>
        <div className={styles.resumoComraContext}>
          <p>Subtotal:</p>
          <p>Frete:</p>
          <p>Total:</p>
        </div>
        <div className={styles.valoresContent}>
          <p> {FormatCurrency(totalProdutos)} </p>
          <p> {FormatCurrency(19.9)} </p>
          <p> {FormatCurrency(totalCarrinho)}</p>
        </div>
      </div>
      <button onClick={gerarNumPedido(1000, 9999)}>Enviar Pedido</button>
      {/* <ButtonText texto={"Enviar Pedido"} event={gerarNumPedido(1000, 9999)} /> */}
    </div>
  );
}
