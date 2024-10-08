import styles from "./ItemDetail.module.css";
import ItemCount from "../ItemCount/ItemCount";
import { useContext } from "react";
import { CartContext } from "../Contexts/CartContext";
import FormatCurrency from "../utils/FormatCurrency";
import { MdAddShoppingCart } from "react-icons/md";
import { IoIosArrowRoundBack } from "react-icons/io";
import Swal from "sweetalert2";

import { NavLink } from "react-router-dom";
import ButtonText from "../ButtonText/ButtonText";

export default function ItemDetail({ item }) {
  const { preco, titulo, image, texto, stock } = item;
  //usando o estado para modificar o value do input pelos botões
  const { cartItems, setCartItems } = useContext(CartContext);

  function handleAddOnCart() {
    setCartItems([...cartItems, item]);
    localStorage.setItem("cartItens", JSON.stringify(cartItems));
    Swal.fire({
      title: "Produto adicionado ao carrinho",
      icon: "success",
      timer: 1000,
      showConfirmButton: false,
    });
  }

  return (
    <div className={styles.itemDetailContent}>
      <NavLink to="/produtos">
        <ButtonText icon={<IoIosArrowRoundBack />} texto={"Voltar"} />
      </NavLink>

      <div className={styles.itemInfo}>
        <img src={image} />
        <div className={styles.itemDescription}>
          <h2 className={styles.itemTitulo}>{titulo}</h2>
          <h5> DESCRIÇÃO</h5>
          <hr />
          <p>{texto}</p>
          <h3>{FormatCurrency(preco)}</h3>
          
        </div>
        
      </div>
    </div>
  );
}
