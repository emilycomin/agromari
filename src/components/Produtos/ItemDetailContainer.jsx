import ItemDetail from "./ItemDetail";
import ItemFilter from "../ItemFilter/ItemFilter";
import styles from "./ItemDetailContainer.module.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function ItemDetailContainer() {
  const { id } = useParams();
  const [produto, setProduto] = useState([]);

  const getItem = () => {
    var getProdutos = {
      method: "GET",
      redirect: "follow",
    };

    fetch("https://my-json-server.typicode.com/emilycomin/agromari/produtos")
      .then((response) => response.json())
      .then((data) => setProduto(data))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    getItem();
    setProduto(
      produto.filter((item) => {
        return item.d === id;
      })
    );
  }, [id]);

  return (
    <div className={styles.detailContent}>
      <ItemFilter />
      {produto.length == 0 ? (
        console.log("error")
      ) : (
        <ItemDetail item={produto[id]} />
      )}
    </div>
  );
}
