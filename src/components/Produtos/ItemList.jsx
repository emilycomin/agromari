import { useEffect, useState } from "react";
//Router Router
import { Link, useParams } from "react-router-dom";
//estilos
import styles from "./ItemList.module.css";
//componentes
import ItemCard from "./ItemCard";
import Loading from "../Loading/Loading";

function ItemList() {
  const { categoria } = useParams();
  const [itens, setItens] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filtro, setFiltro] = useState([]);

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
  }, []);

  // no retorno usei um if ternário para: se o estado loading for true ele mostra o componente loading se for false
  //mostra o array de produtos
  return loading ? (
    <Loading />
  ) : (
    <div className={styles.productContainer}>
      {itens.map((item) => {
        return <ItemCard item={item} key={item.id} />;
      })}
    </div>
  );
}

export default ItemList;
