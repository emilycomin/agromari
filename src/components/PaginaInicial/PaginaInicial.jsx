import styles from "./PaginaInicial.module.css";
import { FaInstagram, FaFacebook, FaGoogle } from "react-icons/fa";
import Veterinary from "../../img/logos/veterinarian-examining-dog.jpg";

export default function PaginaInicial() {
  return (
    <div className={styles.homeConteiner}>
      <div className={styles.quemSomos}>
        <h1>A Agro Mari</h1>
        <p>
          A Agromari é uma empresa que nasceu em 2010 e vem sempre crescendo e
          com muito trabalho seguimos conquistando largos sorrisos e diversos
          amigos. Nossa missão é proporcionar tudo o que seu animal precisa para
          uma vida saudável e feliz, com produtos que aliam qualidade,
          eficiência e bom preço. Contamos com profissionais qualificados que
          trabalham com carinho e profissionalismo, seja no tratamento do seu
          pet quanto na orientação de qual produto é mais indicado para ele.
        </p>
        <div class={styles.redesSociais}>
          <h2>Acompanhe-nos nas nossas redes sociais!</h2>
          <div class={styles.redesSociaisButtons}>
          <button>
              <a href="https://g.page/r/Caw4bXo2H7LrEBM/review"  target="_blank" rel="noreferrer noopener">
                <FaGoogle />
              </a>
            </button>
            <button>
              <a href="https://www.instagram.com/agro.mari/" target="_blank" rel="noreferrer noopener">
                <FaInstagram />
              </a>
            </button>
            <button>
              <a href="https://pt-br.facebook.com/agromari" target="_blank" rel="noreferrer noopener">
                <FaFacebook />
              </a>
            </button>
          </div>
        </div>
      </div>
      <img src={Veterinary} />
    </div>
  );
}
