import { useContext } from "react";
import { CartContext } from "../Contexts/CartContext";

export default function HandleAddOnCart({ item }) {
  const { cartItems, setCartItems } = useContext(CartContext);

  setCartItems([...cartItems, item]);
  return;
}
