"use client"
import { createContext, useEffect, useState } from "react";


export const CartContext = createContext();

export function CartProvider(props) {
  const { children } = props;
  const [cart, setCart] = useState(null);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    // TODO: obtener carrito
  }, [])
  

  const data = {
    cart,
    addCart: null,
    total,
    deleteItem: () => {},
    deleteAllItems: () => {},
    changeQuantity: () => {},
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
}