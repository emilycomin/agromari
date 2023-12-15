import Item from "./Item";
import styles from "./ItemList.module.css";

const itens = [
  {
    id: 1,
    titulo: "Ração gatos castrados",
    preco: "59,90",
    texto: "Pacote de 1kg",
    categoria: "Gatos",
    image: <img src="../img/Racoes/0001.jpg" />,
  },
  {
    id: 2,
    titulo: "Ração Cães castrados",
    preco: "69,90",
    texto: "Pacote de 1kg",
    categoria: "Cachorro",
    image: <img src="../img/Racoes/0001.jpg" />,
  },
  {
    id: 3,
    titulo: "Ração Gatos Filhotes",
    preco: "89,90",
    texto: "Pacote de 1kg",
    categoria: "Gatos",
    image: <img src="../img/Racoes/0001.jpg" />,
  },
  {
    id: 4,
    titulo: "Ração Cães castrados",
    preco: "69,90",
    texto: "Pacote de 1kg",
    categoria: "Cachorro",
    image: <img src="../img/Racoes/0001.jpg" />,
  },
  {
    id: 5,
    titulo: "Ração Cães castrados",
    preco: "69,90",
    texto: "Pacote de 1kg",
    categoria: "Cachorro",
    image: <img src="../img/Racoes/0001.jpg" />,
  },
];

function ItemList() {
  return (
    <div className={styles.productContainer}>
      {itens.map((item) => {
        console.log(item.titulo);
        return (
          <Item />
          // <Item
          //   key={item.id}
          //   titulo="Emily"
          //   Nome={itens.Nome}
          //   preco={itens.preco}
          //   text={itens.texto}
          //   image={itens.image}
          // />
        );
      })}
    </div>
  );
}
export default ItemList;
