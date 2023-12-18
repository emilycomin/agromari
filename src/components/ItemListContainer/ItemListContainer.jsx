import ItemList from "../Produtos/ItemList";
import ItemFilter from "../ItemFilter/ItemFilter";
import styles from "./ItemListContainer.module.css";

export default function ItemListContainer() {
  return (
    <div className={styles.listContainer}>
      <ItemFilter />
      <ItemList />
    </div>
  );
}
