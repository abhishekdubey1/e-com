import { createContext, useContext, useState } from "react";

export const CartContext = createContext();
const products = [
  {
    id: 1,
    name: "kala chasma",
    price: 1000,
    count: 0,
  },
  {
    id: 2,
    name: "laal chhadi",
    price: 500,
    count: 0,
  },
  {
    id: 3,
    name: "jalebi",
    price: 50,
    count: 0,
  },
  {
    id: 4,
    name: "japani joota",
    price: 10000,
    count: 0,
  },
];
export function CartProvider({ children }) {
  const [items, setItem] = useState(products);
  const setInitialItems = () => setItem(products);
  return (
    <CartContext.Provider value={{ items, setItem, setInitialItems }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
// useCart()
