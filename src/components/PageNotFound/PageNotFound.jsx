import notFound from "../../img/logos/PageNotFound.png";
import styles from "./PageNotFound.module.css";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div className={styles.containerPageNotFound}>
      <img
        src={notFound}
        alt="Gato chorando pela página não encontrada"
        style={{ height: "280px", width: "280px" }}
      />
      <h2>Oops, a página não existe</h2>
      <div className={styles.botoes}>
        Tente de novo na {""}
        <Link to="/">página incial</Link>
      </div>
    </div>
  );
}
