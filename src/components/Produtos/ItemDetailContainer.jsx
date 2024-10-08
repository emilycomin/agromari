//React
import { useState, useEffect } from "react";
//componentes
import Loading from "../Loading/Loading";
import ItemDetail from "./ItemDetail";
//react dom
import { useParams } from "react-router-dom";

export default function ItemDetailContainer() {
  const { id } = useParams();
  const [produto, setProduto] = useState([]);

  useEffect(() => {
    fetch(
      `https://my-json-server.typicode.com/emilycomin/agromari/produtos/${id}`,
      {
        method: "GET",
        headers: { "Content-type": "applecation/json" },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setProduto(data);
      })
      .catch((error) => console.log("error", error));
  }, [id]);
  console.log(produto);

  return (
    <div>
      {produto.length === 0 ? (
        <Loading />
      ) : (
        <ItemDetail item={produto} key={produto.id} />
      )}
    </div>
  );
}
