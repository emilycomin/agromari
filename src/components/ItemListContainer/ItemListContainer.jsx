import ItemList from "../Produtos/ItemList";
import styles from "./ItemListContainer.module.css";

export default function ItemListContainer() {
  return (
    <div className={styles.listContainer}>
      <ItemList />
    </div>
  );
}
