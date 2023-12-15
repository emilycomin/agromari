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
        return (
          <Item
            key={item.id}
            image={item.image}
            titulo={item.titulo}
            Nome={item.Nome}
            preco={item.preco}
            text={item.texto}
          />
        );
      })}
    </div>
  );
}
export default ItemList;
