import styles from "../NavBar/NavBar.module.css";
import LogInButton from "../Login/LogInButton";
import { Link } from "react-router-dom";
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
      <Link to="/">
        <div className={styles.navBarLogo}>
          <img src={Logo} />
        </div>
      </Link>
      <nav className={styles.navBar}>
            <Link to="/">Home</Link>
            <Link to="/produtos">Produtos</Link>
            <Link to="/servicos">Serviços</Link>
            <Link to="/paginaDeContato">Contato</Link>
      </nav>
      <div className={styles.navBarIcons}>
            <Link to="/login">
              <LogInButton color="#a4c735" />
            </Link>
            <button
              className={styles.cartButton}
              onClick={() => setIsCartVisible(!isCartVisible)}
            >
              <BsBasket size={40} color="#a4c735" />
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
