import { createContext, useContext, useState } from "react";

export const CartContext = createContext();
const products = [
  {
    id: 1,
    name: "kala chasma",
    price: 1000,
    count: 0,
    wishlist: true,
  },
  {
    id: 2,
    name: "laal chhadi",
    price: 500,
    count: 0,
    wishlist: true,
  },
  {
    id: 3,
    name: "jalebi",
    price: 50,
    count: 0,
    wishlist: false,
  },
  {
    id: 5,
    name: "japani joota",
    price: 10000,
    count: 0,
    wishlist: false,
  },
  {
    id: 6,
    name: "japani joota",
    price: 10000,
    count: 0,
    wishlist: false,
  },
  {
    id: 7,
    name: "japani joota",
    price: 10000,
    count: 0,
    wishlist: false,
  },
  {
    id: 8,
    name: "japani joota",
    price: 10000,
    count: 0,
    wishlist: false,
  },
];
export function CartProvider({ children }) {
  const [items, setItems] = useState(products);
  const setInitialItems = () => setItems(products);
  return (
    <CartContext.Provider value={{ items, setItems, setInitialItems }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
// useCart()
