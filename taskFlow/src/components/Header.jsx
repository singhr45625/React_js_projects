import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Link } from "react-router-dom";
import "../App.css";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className="header">
      <h2>TaskFlow</h2>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/tasks">Tasks</Link>
        <Link to="/contact">Contact</Link>
        <button onClick={toggleTheme} style={{ marginLeft: 10 }}>
          {theme === "light" ? "🌙 Dark" : "☀ Light"}
        </button>
      </div>
    </header>
  );
};

export default Header;