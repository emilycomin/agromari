import "./global.css";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/Produtos/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartWidjet from "./components/NavBar/CartWidjet";
import Contato from "./components/Contato/Contato";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import LogIn from "./components/Login/LogIn";
import HomeHeader from "./components/HomeHeader/HomeHeader";
import HomeContent from "./components/HomeContent/HomeContent";
import { CartProvider } from "./components/Contexts/CartContext";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* quais informações eu quero compartilhar? array de compras do carrinho, comprimento do array(pra colocar na cestinha), addCart*/}
        <CartProvider>
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
        </CartProvider>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
