import "./global.css";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import ItemList from "./components/Produtos/ItemList";

function App() {
  return (
    <>
      <div className="App">
        <NavBar />
        <ItemList />
        <Footer />
      </div>
    </>
  );
}

export default App;
