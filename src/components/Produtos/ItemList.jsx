import ItemCard from "./ItemCard";
import styles from "./ItemList.module.css";

const itens = [
  {
    id: 1,
    titulo: "Ração Gatos",
    preco: "59,90",
    texto: "Pacote de 1kg",
    categoria: "Gatos",
    stock: 10,
    image:
      "https://premierpet.com.br/wp-content/uploads/2020/11/racao-golden-formula-caes-filhote-carne-arroz.png",
  },
  {
    id: 2,
    titulo: "Ração Cães castrados",
    preco: "69,90",
    texto: "Pacote de 1kg",
    categoria: "Cachorro",
    stock: 30,
    image:
      "https://premierpet.com.br/wp-content/uploads/2020/11/racao-golden-formula-caes-filhote-carne-arroz.png",
  },
  {
    id: 3,
    titulo: "Ração Gatos Filhotes",
    preco: "89,90",
    texto: "Pacote de 1kg",
    categoria: "Gatos",
    stock: 25,
    image:
      "https://premierpet.com.br/wp-content/uploads/2020/11/racao-golden-formula-caes-filhote-carne-arroz.png",
  },
  {
    id: 4,
    titulo: "Ração Cães castrados",
    preco: "69,90",
    texto: "Pacote de 1kg",
    categoria: "Cachorro",
    stock: 13,
    image:
      "https://premierpet.com.br/wp-content/uploads/2020/11/racao-golden-formula-caes-filhote-carne-arroz.png",
  },
  {
    id: 5,
    titulo: "Ração Cães Filhotes",
    preco: "69,90",
    texto: "Pacote de 1kg",
    categoria: "Cachorro",
    stock: 5,
    image:
      "https://premierpet.com.br/wp-content/uploads/2020/11/racao-golden-formula-caes-filhote-carne-arroz.png",
  },
];

function ItemList() {
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
