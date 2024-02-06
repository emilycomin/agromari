import { useEffect, useState } from "react";
//estilos
import styles from "./ItemList.module.css";
//componentes
import ItemCard from "./ItemCard";
import Loading from "../Loading/Loading";
//Firebase
import { getFirestore, getDoc, doc } from "firebase/firestore";
import { useParams } from "react-router-dom";

function ItemList() {
  const { id } = useParams;
  const [itens, setItens] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/emilycomin/agromari/produtos", {
      method: "GET",
      headers: { "Content-type": "applecation/json" },
    })
      .then((response) => response.json())
      .then((data) => {
        setItens(data);
      })
      .catch((error) => console.log("error", error));

    setLoading(false);
  }, []);

  // // faz um state para salvar o dados pegos do fierbase
  // const [products, setProducts] = useState([]);

  // //use effect para importar os dados
  // useEffect(() => {
  //   //pegando o banco de dados
  //   const database = getFirestore();
  //   setLoading(false);

  //   //pegando o database, passandoo nome do banco de dados e a sua referência do firebase
  //   const ref = doc(database, "produtos", "HoUZEtAKn7GSjUfABDS9");
  //   //pagando o documento passado na variavel acima com as identificações do meu banco de dados, e retorna um snapshot
  //   getDoc(ref).then((snapshot) => {
  //     if (snapshot.exists()) {
  //       setProducts({ firebaseId: snapshot.id, ...snapshot.data() });
  //     }
  //   });
  // }, []);

  // useEffect(() => {}, [products]);

  // no retorno usei um if ternário para: se o estado loading for true ele mostra o componente loading se for false
  //mostra o array de produtos

  return loading ? (
    <Loading />
  ) : (
    <div className={styles.productContainer}>
      {itens.map((item) => {
        return <ItemCard item={item} key={item.id} />;
      })}
    </div>
  );
}

export default ItemList;
