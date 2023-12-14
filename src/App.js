import "./global.css";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <>
      <div className="App">
        {/* <NavBar /> */}
        <ItemListContainer />
        <Footer />
      </div>
    </>
  );
}

export default App;
