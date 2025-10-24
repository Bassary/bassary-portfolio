import { NavLink } from "react-router-dom";
import './style/NavbarSticky.scss'

const NavbarSticky = () => {
  return (
        <nav className="navbar-sticky">
        <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
        >Accueil</NavLink>
        <NavLink
            to="/mon-parcours"
            className={({ isActive }) => (isActive ? "active" : "")}
        >Mon parcours</NavLink>
        <NavLink
            to="/mes-projets"
            className={({ isActive }) => (isActive ? "active" : "")}
        >Mes projets</NavLink>
        </nav>
  );
};

export default NavbarSticky;
