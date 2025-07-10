import React from "react";
import ProductCard from "./ProductCard";

const ProductPage = () => {
  const products = [
    { id: 1, name: "Laptop" },
    { id: 2, name: "Phone" },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h3>Products</h3>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductPage;
