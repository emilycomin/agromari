import "./global.css";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartWidjet from "./components/NavBar/CartWidjet";
import Contato from "./components/Contato/Contato";
import ItemDetail from "./components/Produtos/ItemDetail";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        {/* o que não muda fica fora de routes */}
        <Routes>
          <Route path="/produtos" element={<ItemListContainer />} />
          <Route
            path="/produtos/itemDetailContainer"
            element={<ItemDetail />}
          />
          <Route path="/carrinnho" element={<CartWidjet />} />

          <Route path="/paginaDeContato" element={<Contato />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
