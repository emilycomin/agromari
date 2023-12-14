import ItemCount from "../ItemCount/ItemCount";

let itens = [
  {
    id: 1,
    Nome: "Ração Gatos castrados",
    preco: "59,90",
    texto: "Pacote de 1kg",
    categoria: "Gatos",
    image: <img src="../img/Racoes/0001.jpg" />,
  },
  {
    id: 2,
    Nome: "Ração Cães castrados",
    preco: "69,90",
    texto: "Pacote de 1kg",
    categoria: "Cachorro",
    image: <img src="../img/Racoes/0001.jpg" />,
  },
  {
    id: 3,
    Nome: "Ração Gatos Filhotes",
    preco: "89,90",
    texto: "Pacote de 1kg",
    categoria: "Gatos",
    image: <img src="../img/Racoes/0001.jpg" />,
  },
  {
    id: 4,
    Nome: "Ração Cães castrados",
    preco: "69,90",
    texto: "Pacote de 1kg",
    categoria: "Cachorro",
    image: <img src="../img/Racoes/0001.jpg" />,
  },
];

export default function ItemList(name, text, price, image) {
  return (
    const promisseItens = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(itens)
      }, 2000)
    })
    Promise.Itens.then((response) => {
      
    })
  );
}
