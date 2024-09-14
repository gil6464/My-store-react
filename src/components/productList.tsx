import React, { useContext, useMemo } from "react";
import { ProductContext } from "../contexts/ProductContext";
import ProductItem from "./ProductItem";

const ProductList: React.FC = () => {
  const context = useContext(ProductContext);

  const productItems = useMemo(() => {
    if (!context || !context.products) {
      return <p>Error loading products</p>;
    }

    const { products } = context;

    return products.map(product => <ProductItem key={product.id} product={product} />);
  }, [context]);

  return <div>{productItems}</div>;
};

export default ProductList;
