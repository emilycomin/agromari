import React from "react";
import Styles from "./Footer.module.css";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <div>
      Footer <FaInstagram />
      <div className={Styles.creditoImagens}>
        <a href="https://br.freepik.com/vetores-gratis/cao-shiba-inu-bonito-chorando-ilustracao-de-icone-de-vetor-de-desenhos-animados-conceito-de-icone-de-natureza-animal-isolado-plano_30924703.htm#query=cachorro%20triste&position=0&from_view=keyword&track=ais&uuid=d24ebb1d-2cb7-4245-ba34-be821bf40899">
          Imagem de catalyststuff
        </a>
        no Freepik
      </div>
    </div>
  );
}
