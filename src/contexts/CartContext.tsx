import React, { ReactNode, createContext, useState } from "react";

export interface ProductInterface {
  id: string;
  name: string;
  imageUrl: string;
  price: string;
  numberPrice: number;
  description: string;
  defaultPriceId: string;
}

interface ContextProps {
  children: ReactNode;
}

interface CartContextData {
  cartItems: ProductInterface[];
  addToCart: (product: ProductInterface) => void;
  cartTotal: number;
  itemAlreadyExists: (productId: string) => boolean;
  removeFromCar: (productId: string) => void;
}

export const CartContext = createContext<CartContextData>(
  {} as CartContextData
);

export function CartContextProvider({ children }: ContextProps) {
  const [cartItems, setCartItems] = useState<ProductInterface[]>([]);

  const cartTotal = cartItems.reduce((total, product) => {
    return total + product.numberPrice;
  }, 0);

  function addToCart(product: ProductInterface) {
    setCartItems((state) => [...state, product]);
  }
  function removeFromCar(productId: string) {
    setCartItems((state) => state.filter((item) => item.id !== productId));
  }

  function itemAlreadyExists(productId: string) {
    return cartItems.some((product) => product.id === productId);
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCar,
        itemAlreadyExists,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
