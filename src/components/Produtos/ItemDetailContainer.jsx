import ItemDetail from "./ItemDetail";

const getItem = () => {
  // promises
  new Promise((resolve, reject) => {
    resolve();
  }, 2000);
};

export default function itemDetailContent() {
  return <ItemDetail />;
}
