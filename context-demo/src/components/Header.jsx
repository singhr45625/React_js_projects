import React, { useContext } from "react";
import { CartContext } from "../CartContext";

const Header = () => {
  const { cartCount } = useContext(CartContext);

  return (
    <header style={{ padding: "10px", background: "#eee" }}>
      <h2>My Shop 🛒 ({cartCount})</h2>
    </header>
  );
};

export default Header;
