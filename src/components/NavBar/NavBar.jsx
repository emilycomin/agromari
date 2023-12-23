import Logo from "../../img/logos/logo simples sem fundo.png";
import "bootstrap/js/dist/tab";
import "bootstrap/js/dist/dropdown";
import "bootstrap/js/dist/collapse";
import styles from "../NavBar/NavBar.module.css";
import CartWidjet from "./CartWidjet";
import LogInButton from "../Login/LogInButton";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className={styles.navBar}>
      <div className={styles.container}>
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
          <Link to="/carrinho">
            <CartWidjet color="#a4c735" />
          </Link>
        </div>
      </div>
    </nav>
  );
}
