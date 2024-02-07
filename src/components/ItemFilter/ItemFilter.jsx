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
  const { categorias } = useParams;

  //armazena os dados da API
  const [produtos, setProdutos] = useState([]);
  //armazena os dados dos filtros estipulado
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/emilycomin/agromari/produtos/")
      .then((response) => response.json())
      .then((data) => {
        setProdutos(data);
      })
      .catch((error) => console.log("error", error));
  }, [categorias]);

  useEffect(() => {
    const filtro = setProdutos(
      categorias
        ? produtos.filter((item) => {
            return item.categoria === categorias;
          })
        : produtos
    );
  }, [categorias]);
  //o item ele tem uma categoria
  // o db.json tem categorias para escolhas
  // então quando o selecionado a categorias igual a categoria do item mostra essas opções

  return (
    <aside className={styles.asideContent}>
      <form className={styles.formAside}>
        <Link to={`/categorias/${categorias}`}>Rações para Cachorros</Link>
        <Link to={`/categorias/${categorias}`}>Rações para Gatos</Link>
      </form>

      {/* {produtos.map((produto) => {
        return <ItemCard item={produto} key={produto.id} />;
      })} */}
    </aside>
  );
}
