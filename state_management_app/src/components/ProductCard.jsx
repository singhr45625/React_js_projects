import React, { useContext } from "react";
import { CartContext } from "../CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div style={{ border: "1px solid #ccc", marginBottom: "10px", padding: "10px" }}>
      <h4>{product.name}</h4>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
