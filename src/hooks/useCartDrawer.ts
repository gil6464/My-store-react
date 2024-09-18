import { CartDrawerContext, CartDrawerContextProps } from "@contexts/CartDrawerContext";
import { useContext } from "react";

export const useCartDrawer = (): CartDrawerContextProps => {
  const context = useContext(CartDrawerContext);

  if (!context) {
    throw new Error("useCartDrawer must be used within a CartDrawerProvider");
  }

  return context;
};
