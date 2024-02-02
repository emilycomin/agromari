import { useEffect, useState, useContext } from "react";
import { ItemContext } from "../Contexts/ItemContext";
import styles from "./ItemFilter.module.css";
//componentes
import ButtonText from "../ButtonText/ButtonText";
//firebase
import {
  getDoc,
  collection,
  doc,
  getFirestore,
  where,
} from "firebase/firestore";
import { Database } from "@phosphor-icons/react";

export default function Search() {
  const [categoria, setCategoria] = useState([]);
  const [produto, setProduto] = useState([]);

  useEffect(() => {
    //API JSONPLaceholder
    fetch("https://my-json-server.typicode.com/emilycomin/agromari/categorias")
      .then((response) => response.json())
      .then((data) => setCategoria(data))
      .catch((error) => console.log(error));
  }, [categoria]);

  function handleSearch(e) {
    e.preventDefault();
    setCategoria(
      categoria.filter((item) => {
        return item.categoria === produto.categoria;
      })
    );
  }

  return (
    <aside className={styles.asideContent}>
      <form className={styles.formAside}>
        {/* <input
          type="text"
          //passamos o value como o estado do react para o input ser controlado pelo react e não mais pelo html
          value={searchValue}
          placeholder="digite aqui"
          className="inputSearch"
          onChange={({ target }) => setSearchValeu(target.value)}
          required
        /> */}

        <select
          name="categorias"
          placeholder="Selecione a Categoria"
          options={categoria}
        >
          <option value={categoria.id} selected>
            Selecione uma opção
          </option>
          {categoria.map((categorias) => (
            <option value={categorias.id} key={categorias.id}>
              {categorias.name}
            </option>
          ))}
        </select>

        <ButtonText texto="pesquisar" event={handleSearch} />
      </form>
    </aside>
  );
}
