import React from "react";
import Styles from "./Footer.module.css";
import bandeirasCartoes from "../../img/bandeiras-3.png";
import bandeirasCartaoBanri from "../../img/banricompras.png";
import pix from "../../img/pix.png";

export default function Footer() {
  return (
    <div className={Styles.footerContent}>
      <div className={Styles.footerLeft}>
        <p>Métodos de pagamento:</p>
        <div className={Styles.bandeirasPagamento}>
          <img src={bandeirasCartoes} />
          <img src={bandeirasCartaoBanri} style={({ height: "24px" }, { width: "24px" })}/>
          <img src={pix} style={({ height: "24px" }, { width: "24px" })} />
        </div>
      </div>
      <div className={Styles.footerRigth}>
        <p>
          Agro-Mari Ivonir Comin Comercio de Produtos Para Animais LTDA
          13.396.586/0001-05 <br />
          Todos os direitos reservados, 2024.
        </p>
      </div>
    </div>
  );
}
