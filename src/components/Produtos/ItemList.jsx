import { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import styles from "./ItemList.module.css";
import Item from "./ItemCard";

function ItemList() {
  const [itens, setItem] = useState([]);

  const getItem = () => {
    var getProdutos = {
      method: "GET",
      redirect: "follow",
    };

    fetch("http://localhost:3000/produtos")
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
        return (
          <ItemCard
            key={item.id}
            titulo={item.titulo}
            Nome={item.Nome}
            preco={item.preco}
            texto={item.texto}
            image={item.image}
            stock={item.stock}
          />
        );
      })}
    </div>
  );
}

export default ItemList;
