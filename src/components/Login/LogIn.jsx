import { Link } from "react-router-dom";
import Styles from "./Login.module.css";
import { MdOutlineAlternateEmail, MdPassword } from "react-icons/md";

export default function LogIn() {
  return (
    <div className={Styles.loginContent}>
      <h2>Faça seu login</h2>

      <form className={Styles.loginForm}>
        <label>E-mail:</label>
        <div className={Styles.loginInput}>
          <input type="email" placeholder="Seu E-mail" />
          <MdOutlineAlternateEmail className="inputLoginIcon" />
        </div>
        <label>Senha:</label>
        <div className={Styles.loginInput}>
          <input type="password" placeholder="Sua senha" />
          <MdPassword className="inputLoginIcon" />
        </div>
        <button className={Styles.loginButton}>Login</button>
        <div className={Styles.loginLinks}>
          <a href="#">Esqueceu sua senha?</a>
          <Link to="/cadastro">Faça seu cadastro </Link>
        </div>
      </form>
    </div>
  );
}
