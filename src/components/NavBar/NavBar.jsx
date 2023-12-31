import styles from "../NavBar/NavBar.module.css";
import LogInButton from "../Login/LogInButton";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../Contexts/CartContext";
import CartWidjet from "../CartWidjet/CartWidjet";
import Logo from "../../img/logos/AGROm.jpg";
import { Phone } from "@phosphor-icons/react";
import { BsBasket } from "react-icons/bs";

export default function NavBar() {
  //pegando informação do array de produtos do context
  const { cartItems, isCartVisible, setiIsCartVisible } =
    useContext(CartContext);

  console.log(isCartVisible);

  return (
    <div className={styles.container}>
      <Link to="/">
        <div className={styles.navBarHeader}>
          <img src={Logo} />
          <h3 className="telInfo">
            <Phone size={38} color="#e98719" />
            (51) 33248-0377
          </h3>
        </div>
      </Link>
      <nav className={styles.navBar}>
        <div className={styles.navBarContainer}>
          <div className={styles.blanck}></div>
          <div className={styles.links}>
            <Link to="/">Home</Link>
            <Link to="/produtos">Produtos</Link>
            <Link to="/paginaDeContato">Contato</Link>
          </div>
          <div className={styles.icons}>
            <Link to="/login">
              <LogInButton color="#a4c735" />
            </Link>
            <button
              className={styles.cartButton}
              onClick={() => setiIsCartVisible(!isCartVisible)}
            >
              <BsBasket size={30} color="#a4c735" />
              {/* integrando informaçãoes e mostrando o comprimento do array */}
              {cartItems.length > 0 && (
                <span className={styles.cartStatus}>{cartItems.length}</span>
              )}
              <CartWidjet />
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
