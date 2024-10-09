import { useEffect, useState } from "react";
//Router Router
import { NavLink, useParams } from "react-router-dom";
//estilos
import styles from "./ItemList.module.css";
//Icones
import { LuCat, LuDog } from "react-icons/lu";
import { TbFilterCancel } from "react-icons/tb";
//componentes
import ItemCard from "./ItemCard";

export default function ItemList() {
  const { categoria } = useParams();
  const [itens, setItens] = useState([]);
  const [itensFiltrados, setItensFiltrados] = useState([]);

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/emilycomin/agromari/produtos/", {
      method: "GET",
      headers: { "Content-type": "applecation/json" },
    })
      .then((response) => response.json())
      .then((data) => {
        setItens(data);
      })
      .catch((error) => console.log("error", error));
      produtosFiltrados()
  }, [categoria]);

  function produtosFiltrados() {
    setItensFiltrados(
      itens.filter((item) => {
        return item.categoria === categoria;
      })
    );
  }
  //mostra o array de produtos ou a busca filtrada por categoria
  return (
    <div className={styles.productContent}>
      <div className={styles.productContainer}>
        <aside className={styles.asideContent}>
          <h1>Categorias</h1>
          <div className={styles.navFilters}>
            <NavLink to="/categoria/dog">
              <button onClick={produtosFiltrados}>
                <LuDog />
                Cachorro
              </button>
            </NavLink>
            <NavLink to="/categoria/cat">
              <button onClick={produtosFiltrados}>
                <LuCat />
                Gatos
              </button>
            </NavLink>
            <NavLink to="/produtos">
              <button>
                <TbFilterCancel />
                Limpar Filtros
              </button>
            </NavLink>
          </div>
        </aside>
      </div>
      {/* usando if ternário para mostrar todos os produtos e se caso o array de filtro for maior que 0 mostra os produtos fitlrados */}
      {itensFiltrados.length === 0 ? (
        itens.map((itemDb) =>{
          return <ItemCard item={itemDb} key={itemDb.id}/>
        })
      ) : (
        itensFiltrados.map((item) => {
          return <ItemCard item={item} key={item.id} />;
        })
      )}    
    </div>
  );
}
