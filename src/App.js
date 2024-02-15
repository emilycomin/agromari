import "./global.css";
//React
import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useSearchParams,
} from "react-router-dom";
import { CartProvider } from "./components/Contexts/CartContext";
//componentes
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/Produtos/ItemDetailContainer";
import Contato from "./components/Contato/Contato";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import LogIn from "./components/Login/LogIn";
import PaginaInicial from "./components/PaginaInicial/PaginaInicial";
import FinalizarCompra from "./components/FinalizarCompra/FinalizarCompra";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* quais informações eu quero compartilhar? array de compras do carrinho, comprimento do array(pra colocar na cestinha), addCart*/}
        <CartProvider>
          <NavBar />
          {/* o que não muda fica fora de routes */}
          <Routes>
            <Route path="/" element={<PaginaInicial />} />
            <Route path="/produtos" element={<ItemListContainer />} />
            <Route path="/produtos/:id" element={<ItemDetailContainer />} />
            <Route
              path="/categoria/:categoria"
              element={<ItemListContainer />}
            />
            <Route path="/login" element={<LogIn />} />
            <Route path="/paginaDeContato" element={<Contato />} />
            <Route path="*" element={<PageNotFound />} />
            <Route path="/cart" element={<FinalizarCompra />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
