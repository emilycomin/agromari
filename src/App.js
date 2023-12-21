import "./global.css";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartWidjet from "./components/NavBar/CartWidjet";
import Contato from "./components/Contato/Contato";
import ItemDetail from "./components/Produtos/ItemDetail";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import PaginaInicial from "./components/PaginaInicial/PaginaInicial";
import LogIn from "./components/Login/LogIn";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        {/* o que não muda fica fora de routes */}
        <Routes>
          <Route path="/" element={<PaginaInicial />} />
          <Route path="/produtos" element={<ItemListContainer />} />
          <Route
            path="/produtos/itemDetailContainer:id"
            element={<ItemDetail />}
          />
          <Route path="/carrinho" element={<CartWidjet />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/paginaDeContato" element={<Contato />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
