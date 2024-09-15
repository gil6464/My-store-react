import React, { useState, useContext } from "react";
import { ProductContext } from "../../contexts/ProductContext";

const ProductFilter: React.FC = () => {
  const [category, setCategory] = useState("");
  const context = useContext(ProductContext);

  if (!context) return null;

  const { products } = context;

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(event.target.value);
  };

  const filteredProducts = category
    ? products.filter(product => product.category === category)
    : products;

  return (
    <div>
      <div>
        <select onChange={handleCategoryChange} value={category}>
          <option value="">All Categories</option>
          <option value="electronics">Electronics</option>
          <option value="jewelery">Jewelery</option>
          <option value="men's clothing">Men's Clothing</option>
          <option value="women's clothing">Women's Clothing</option>
        </select>
      </div>

      <div>
        {filteredProducts.map(product => (
          <div key={product.id}>{product.title}</div>
        ))}
      </div>
    </div>
  );
};

export default ProductFilter;
