import styles from "../NavBar/NavBar.module.css";
import LogInButton from "../Login/LogInButton";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../Contexts/CartContext";
import CartWidjet from "../CartWidjet/CartWidjet";
import Logo from "../../img/logos/AGRO MARI.png";
import { BsBasket } from "react-icons/bs";

export default function NavBar() {
  //pegando informação do array de produtos do context
  const { cartItems, isCartVisible, setIsCartVisible } =
    useContext(CartContext);

  return (
    <div className={styles.container}>
      <NavLink to="/">
        <div className={styles.navBarLogo}>
          <img src={Logo} />
        </div>
      </NavLink>
      <nav className={styles.navBar}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/produtos">Produtos</NavLink>
            <NavLink to="/servicos">Serviços</NavLink>
            <NavLink to="/paginaDeContato">Contato</NavLink>
      </nav>
      <div className={styles.navBarIcons}>
            <NavLink to="/login">
              <LogInButton color="#a4c735" />
            </NavLink>
            <button
              className={styles.cartButton}
              onClick={() => setIsCartVisible(!isCartVisible)}
            >
              <BsBasket size={32} color="#a4c735" />
              {/* integrando informaçãoes e mostrando o comprimento do array */}
              {/* apenas mostrar valor se o tamanho do array for maior que 0, adicionando a propriedade de estilo cartStatus */}
              {cartItems.length > 0 && (
                <span className={styles.cartStatus}>{cartItems.length}</span>
              )}
            </button>
            <CartWidjet />
        </div>
    </div>
  );
}
