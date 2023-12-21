import ItemDetail from "./ItemDetail";
import ItemFilter from "../ItemFilter/ItemFilter";

const getItem = () => {
  // promises
  new Promise((resolve, reject) => {
    resolve();
  }, 2000);
};

export default function itemDetailContent() {
  return (
    <fragment>
      <ItemFilter />
      <ItemDetail />;
    </fragment>
  );
}
