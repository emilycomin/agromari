import { LuSearchCheck } from "react-icons/lu";
import { useState } from "react";
import styles from "./ItemFilter.module.css";
import ButtonText from "../ButtonText/ButtonText";

export default function Search() {
  const [searchValue, setSearchValeu] = useState("");

  function handleSearch(e) {
    e.preventDefault();
    console.log(searchValue);
  }

  return (
    <aside className={styles.asideContent}>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          //passamos o value como o estado do react para o input ser controlado pelo react e não mais pelo html
          value={searchValue}
          placeholder="digite aqui"
          className="inputSearch"
          onChange={({ target }) => setSearchValeu(target.value)}
          required
        />

        <select name="categorias" placeholder="Selecione a Categoria">
          <option value="" selected>
            Selecione uma opção
          </option>
          <option value="racoesCaes">Rações Cães</option>
          <option value="racoesGato" selected>
            Rações Gatos
          </option>
          <option value="acessorios"> Acessórios</option>
          <option value="medicamentos"> Medicamentos</option>
        </select>

        <ButtonText texto="pesquisar" />
      </form>
    </aside>
  );
}
