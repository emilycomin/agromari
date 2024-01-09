import { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import styles from "./ItemList.module.css";
import Loading from "../Loading/Loading";

function ItemList() {
  const [itens, setItens] = useState([]);
  const [loading, setLoading] = useState(true);

  const getItem = () => {
    var getProdutos = {
      method: "GET",
      redirect: "follow",
    };

    fetch("https://my-json-server.typicode.com/emilycomin/agromari/produtos")
      .then((response) => response.json())
      .then((data) => setItens(data))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    getItem();
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
