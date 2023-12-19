import ItemCard from "./ItemCard";
import styles from "./ItemList.module.css";

fetch("http://localhost:3000/produtos")
  .then((response) => response.json())
  .then((data) => console.log(data.length));

function ItemList() {
  return (
    <div className={styles.productContainer}>
      {data.map((item) => {
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
