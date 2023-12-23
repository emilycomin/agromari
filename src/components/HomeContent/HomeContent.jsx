import styles from "../HomeContent/HomeContent.module.css";
import { Bathtub, PawPrint, MapTrifold } from "@phosphor-icons/react";
import ButtonText from "../ButtonText/ButtonText";

export default function HomeContent() {
  return (
    <div className={styles.HomeConteiner}>
      <div className={styles.quemSomos}>
        <div className={styles.quemSomos}>
          <PawPrint size={52} color="#a4c735" weight="duotone" />
          <h2 className="tituloHome">Quem Somos</h2>
          <p>
            Somos uma empresa que há 10 anos proporcionando experiências para
            nossos amigos peludos. Priorizando a qualidade dos produtos com o
            melhor custo benefícios.
          </p>
        </div>
      </div>
      <div className={styles.oQueFazemos}>
        <Bathtub size={52} color="#a4c735" weight="duotone" />
        <h2 className="tituloHome">O que fazemos</h2>
        <p>
          Disponibilizamos serviços de Banho, Tele-busca e entrega, atendimento
          veterinário, rações, acessórios e medicamentos.
        </p>
      </div>
      <div className={styles.ondeEstamos}>
        <MapTrifold size={52} color="#a4c735" weight="duotone" />
        <h2 className="tituloHome">Localização</h2>
        <p>
          Nossa Loja está localizada na Zona Sul de Porto Alegre! Venha nos
          visitar!
        </p>
        <ButtonText texto={"Entre em contato"} />
      </div>
    </div>
  );
}
