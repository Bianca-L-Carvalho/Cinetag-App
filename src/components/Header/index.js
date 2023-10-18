import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import HeaderLink from "../HeaderLink";
import logo from "./Logo-cinetag-branco.png"

export default function Header() {
  return (
    <header className={styles.header}>
      <Link to="./">
        <img src={logo} alt="Logo Cinetag" />
      </Link>
      <nav>
        <HeaderLink url="./">Home</HeaderLink>
        <HeaderLink url="./favorites">Favorites</HeaderLink>
      </nav>
    </header>
  );
}
