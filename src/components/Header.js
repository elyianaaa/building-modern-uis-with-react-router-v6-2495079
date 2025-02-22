import { Link, NavLink } from "react-router-dom";
import logo from "../assets/R.png";

export default function Header() {
  const getClass = ({ isActive }) => (isActive ? "nav-active" : null);

  return (
    <header className="container">
      <Link to="/">
        <img
          className="logo"
          src={logo}
          alt="RP logo"
          title="RP | Home"
        />
      </Link>

      <nav>
        <NavLink to="/" className={getClass}>
          Home
        </NavLink>
        <NavLink to="/categories" className={getClass}>
          Diplomas
        </NavLink>
        <NavLink to="/register" className={getClass}>
          Register
        </NavLink>
      </nav>
    </header>
  );
}
