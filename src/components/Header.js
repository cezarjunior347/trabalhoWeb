import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import "../styles/Header.css";

export default function Header() {
  return (
    <header className="header">
      <img src={logo} alt="TechNova Logo" className="logo" />

      <nav>
        <Link to="/">Home</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/produtos">Produtos</Link>
        <Link to="/contato">Contato</Link>
      </nav>
    </header>
  );
}
