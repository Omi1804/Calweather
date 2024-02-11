import logo from "../../assets/logo.svg";
import { useLocation, useNavigate } from "react-router-dom";
import "./navbar.css";
import SearchBar from "../Elements/SearchBar/SearchBar";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <nav className={`${location.pathname !== "/" ? "otherPage" : ""} navbar`}>
      <div className="logo">
        <img src={logo} alt="" />
        <p>Calweather</p>
      </div>

      {location.pathname !== "/" ? <SearchBar /> : ""}

      <div className="menu">
        <span className="material-symbols-outlined">menu_open</span>
      </div>
    </nav>
  );
};

export default Navbar;
