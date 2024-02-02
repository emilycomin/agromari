import { createContext, useState } from "react";

export const ItemContext = createContext([]);

export const ItemProvider = ({ children }) => {
  const [itens, setItens] = useState([]);
  console.log(itens);
  const value = {
    itens,
    setItens,
  };

  return <ItemContext.Provider value={value}> {children}</ItemContext.Provider>;
};

export default ItemProvider;
