import React, { createContext, ReactNode } from "react";
import { Product } from "../services/ProductService";
import useFetch from "../hooks/useFetch";

interface ProductContextType {
  products: Product[];
  loading: boolean;
  error: string | null;
}

export const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const {
    data: products,
    error,
    loading,
  } = useFetch<Product[]>("https://fakestoreapi.com/products");

  return (
    <ProductContext.Provider value={{ products: products || [], error, loading }}>
      {children}
    </ProductContext.Provider>
  );
};
