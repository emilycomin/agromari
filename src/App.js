import "./global.css";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/Produtos/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartWidjet from "./components/NavBar/CartWidjet";
import Contato from "./components/Contato/Contato";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import PaginaInicial from "./components/PaginaInicial/PaginaInicial";
import LogIn from "./components/Login/LogIn";
import HomeHeader from "./components/HomeHeader/HomeHeader";
import HomeContent from "./components/HomeContent/HomeContent";

function App() {
  return (
    <>
      <BrowserRouter>
        <HomeHeader />
        <NavBar />
        {/* o que não muda fica fora de routes */}
        <Routes>
          <Route path="/" element={<HomeContent />} />
          <Route path="/produtos" element={<ItemListContainer />} />
          <Route path="/produtos/:id" element={<ItemDetailContainer />} />
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
