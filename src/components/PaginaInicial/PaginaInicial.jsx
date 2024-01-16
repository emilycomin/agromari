import styles from "./PaginaInicial.module.css";
import { IoPawSharp } from "react-icons/io5";
import { FaShower } from "react-icons/fa6";
import { FaMapSigns } from "react-icons/fa";
import ButtonText from "../ButtonText/ButtonText";

export default function PaginaInicial() {
  return (
    <div className={styles.homeConteiner}>
      <div className={styles.quemSomos}>
        <div className={styles.card}>
          <IoPawSharp size={52} color="#a4c735" />
          <h2 className="tituloHome">Quem Somos</h2>
          <p>
            Somos uma empresa que há 10 anos proporcionando experiências para
            nossos amigos peludos. Priorizando a qualidade dos produtos com o
            melhor custo benefícios.
          </p>
        </div>
      </div>
      <div className={styles.oQueFazemos}>
        <div className={styles.card}>
          <FaShower size={52} color="#a4c735" />
          <h2 className="tituloHome">O que fazemos</h2>
          <p>
            Disponibilizamos todos os serviços de Banho & Tosa para cães de
            todos os portes, Tele-busca e entrega, atendimento veterinário.
            Venda de rações, acessórios e medicamentos.
          </p>
        </div>
      </div>
      <div className={styles.ondeEstamos}>
        <div className={styles.card}>
          <FaMapSigns size={52} color="#a4c735" />
          <h2 className="tituloHome">Localização</h2>
          <p>
            Nossa Loja está localizada na Zona Sul de Porto Alegre! Venha nos
            visitar!
          </p>
          <ButtonText texto={"Entre em contato"} />
        </div>
      </div>
    </div>
  );
}
