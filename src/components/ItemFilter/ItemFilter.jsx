import { useEffect, useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./ItemFilter.module.css";
//componentes
import ButtonText from "../ButtonText/ButtonText";
import ItemCard from "../Produtos/ItemCard";
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
  const { categoria } = useParams;
  //armazena os dados da API
  const [filtro, setFiltro] = useState([]);

  //armazena os dados dos filtros estipulado
  function produtosFiltrados() {
    setFiltro(
      filtro.filter((item) => {
        return item.categoria === categoria;
      })
    );
  }

  useEffect(() => {
    fetch(
      `https://my-json-server.typicode.com/emilycomin/agromari/produtos/${categoria}`,
      {
        method: "GET",
        headers: { "Content-type": "applecation/json" },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setFiltro(data);
      })
      .catch((error) => console.log("error", error));
  }, [categoria]);
  console.log(filtro);
  //o item ele tem uma categoria
  // o db.json tem categorias para escolhas
  // então quando o selecionado a categorias igual a categoria do item mostra essas opções

  return (
    <aside className={styles.asideContent}>
      <Link to="/categoria/dog">
        <button onClick={produtosFiltrados}>Rações para Cachorro</button>
      </Link>
      <Link to="/categoria/cat">
        <button onClick={produtosFiltrados}>Rações para Gatos</button>
      </Link>
    </aside>
  );
}
