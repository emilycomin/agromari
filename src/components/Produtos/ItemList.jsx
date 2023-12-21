import { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import styles from "./ItemList.module.css";

function ItemList() {
  const [itens, setItem] = useState([]);

  const getItem = () => {
    var getProdutos = {
      method: "GET",
      redirect: "follow",
    };

    fetch("https://my-json-server.typicode.com/emilycomin/agromari/produtos")
      .then((response) => response.json())
      .then((data) => setItem(data))
      .catch((error) => console.log("error", error));
  };
  useEffect(() => {
    getItem();
  }, []);

  return (
    <div className={styles.productContainer}>
      {itens.map((item) => {
        return <ItemCard item={item} />;
      })}
    </div>
  );
}

export default ItemList;
