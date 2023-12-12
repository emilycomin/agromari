import "./global.css";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemCount from "./components/ItemCount/ItemCount";

function App() {
  return (
    <>
      <div className="App">
        <NavBar />

        <div className="ContentCards">
          <ItemListContainer name="Ração Cachorro 3kg" price="R$ 68,80" />
          <ItemListContainer name="Ração Gato 3kg" price="R$ 52,00" />
          <ItemListContainer name="Ração Gato 10kg" price="R$ 130,90" />
          <ItemListContainer name="Ração Cachorro 3kg" price="R$ 68,80" />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
