import React, { useContext, useMemo } from "react";
import { ProductContext } from "../../contexts/ProductContext";
import ProductItem from "@components/ProductItem/ProductItem";
import { Row, Col } from "react-bootstrap";

const ProductList: React.FC = () => {
  const context = useContext(ProductContext);

  const productItems = useMemo(() => {
    if (!context || !context.products) {
      return <p>Error loading products</p>;
    }

    const { products, error, loading } = context;

    if (loading) return <p>loading...</p>;
    if (error) return <p>Error{error}</p>;

    return (
      <div>
        <h2>Products</h2>
        <Row>
          {products.map(product => (
            <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
              <ProductItem product={product} />
            </Col>
          ))}
        </Row>
      </div>
    );
  }, [context]);

  return <div>{productItems}</div>;
};

export default ProductList;
