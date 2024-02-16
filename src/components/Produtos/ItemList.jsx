import { useEffect, useState } from "react";
//Router Router
import { Link, useParams } from "react-router-dom";
//estilos
import styles from "./ItemList.module.css";
//Icones
import { LuCat, LuDog } from "react-icons/lu";
//componentes
import ItemCard from "./ItemCard";
import Loading from "../Loading/Loading";

function ItemList() {
  const { categoria } = useParams();
  const [itens, setItens] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/emilycomin/agromari/produtos/", {
      method: "GET",
      headers: { "Content-type": "applecation/json" },
    })
      .then((response) => response.json())
      .then((data) => {
        setItens(data);
      })
      .catch((error) => console.log("error", error));

    setLoading(false);
  }, [categoria]);

  function produtosFiltrados() {
    setItens(
      categoria
        ? itens.filter((item) => {
            return item.categoria === categoria;
          })
        : itens
    );
  }
  // no retorno usei um if ternário para: se o estado loading for true ele mostra o componente loading se for false
  //mostra o array de produtos
  return loading ? (
    <Loading />
  ) : (
    <div className={styles.productContainer}>
      <aside className={styles.asideContent}>
        <h1>Filtros:</h1>
        <Link to="/categoria/dog">
          <button onClick={produtosFiltrados}>
            <LuDog />
            Cachorro
          </button>
        </Link>
        <Link to="/categoria/cat">
          <button onClick={produtosFiltrados}>
            <LuCat />
            Gatos
          </button>
        </Link>
        <Link to="/produtos">
          <button>Limpar Filtros</button>
        </Link>
      </aside>
      <div className={styles.productContent}>
        {itens.map((item) => {
          return <ItemCard item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
}

export default ItemList;
