import { useEffect, useState } from "react";
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
  const [searchValue, setSearchValeu] = useState("");
  const [categoria, setCategoria] = useState([]);

  // useEffect(() => {
  //API JSONPLaceholder
  // fetch("https://my-json-server.typicode.com/emilycomin/agromari/categorias")
  //   .then((response) => response.json())
  //   .then((data) => setCategoria(data))
  //   .catch((error) => console.log(error));

  //firebase
  //   const database = getFirestore();
  //   const produtosFiltrados = collection(
  //     "produtos",
  //     where("categoria", "==", { searchValue })
  //   );
  //   getDoc(produtosFiltrados).then((snapshot) => {
  //     console.log(produtosFiltrados);
  //   });
  // }, []);

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

        <select
          name="categorias"
          placeholder="Selecione a Categoria"
          options={categoria}
        >
          <option value="" selected>
            Selecione uma opção
          </option>
          {categoria.map((categorias) => (
            <option value={categorias.id} key={categorias.id}>
              {categorias.name}
            </option>
          ))}
        </select>

        <ButtonText texto="pesquisar" />
      </form>
    </aside>
  );
}
