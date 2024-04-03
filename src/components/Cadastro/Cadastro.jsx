import { useState } from "react";
import Styles from "./Cadastro.module.css";
export default function Cadastro() {
  const [dadosCadastro, setDadoCadastro] = useState({});

  return (
    <div className={Styles.cadastroContent}>
      <h2> Cadastro</h2>
      <form className={Styles.cadastroForm}>
        <label>Nome</label>
        <input type="text" placeholder="Nome completo" />
        <label>Senha</label>
        <input type="password" placeholder="Escolha uma senha" />
        <label>CEP</label>
        <input type="text" placeholder="Digite seu cep" />
        <label>Endereço</label>
        <input type="text" placeholder="Digite seu endereço" />
        <label>Número</label>
        <input type="text" />
        <button className={Styles.cadastroButton}>Cadastrar</button>
      </form>
    </div>
  );
}
