import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = ({setSearch}) => {
  return (
    <nav className="nav-bar">
      <p className="nav-bar-logo">Vs BookStore</p>

      <div className="nav-bar-search-box">
        <label htmlFor="search" className="nav-bar-label">
          Pesquisar Livro:
        </label>
        <input type="search" className="nav-bar-search" id="search" onChange={(ev) => setSearch(ev.target.value.toUpperCase())} />
      </div>
      <Link to={"/register"} className="nav-bar-link">Cadastrar Livro</Link>
    </nav>
  );
};

export default NavBar;
