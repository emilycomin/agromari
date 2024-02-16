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
      {/* <aside className={styles.asideContent}>
        <h1>Escolha sua categoria</h1>
        
          <button onClick={produtosFiltrados}>Rações para Cachorro</button>
        </Link>
      
          <button onClick={produtosFiltrados}>Rações para Gatos</button>
        </Link>
      </aside> */}
      <div className={styles.productContent}>
        {itens.map((item) => {
          return <ItemCard item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
}

export default ItemList;
