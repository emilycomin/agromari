import { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import styles from "./ItemList.module.css";
import { Link } from "react-router-dom";

function ItemList() {
  const [itens, setItem] = useState([]);

  const getItem = () => {
    var getProdutos = {
      method: "GET",
      redirect: "follow",
    };

    fetch("http://localhost:3004/produtos")
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
          <Link to="/produtos/itemDetailContainer">
            <ItemCard
              key={item.id}
              titulo={item.titulo}
              Nome={item.Nome}
              preco={item.preco}
              texto={item.texto}
              image={item.image}
              stock={item.stock}
            />
          </Link>
        );
      })}
    </div>
  );
}

export default ItemList;
