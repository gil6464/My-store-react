import React, { createContext, useContext, useState, ReactNode } from "react";

export interface CartDrawerContextProps {
  isDrawerOpen: boolean;
  toggleDrawer: () => void;
  closeDrawer: () => void;
}

export const CartDrawerContext = createContext<CartDrawerContextProps | undefined>(
  undefined
);

export const CartDrawerProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);
  const closeDrawer = () => setIsDrawerOpen(false);

  return (
    <CartDrawerContext.Provider value={{ isDrawerOpen, toggleDrawer, closeDrawer }}>
      {children}
    </CartDrawerContext.Provider>
  );
};
