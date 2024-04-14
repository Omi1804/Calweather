import logo from "../../assets/logo.svg";
import { useLocation, useNavigate } from "react-router-dom";
import "./navbar.css";
import SearchBar from "../Elements/SearchBar/SearchBar";

const Navbar = ({ handleTabularView, tabularView }) => {
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
        {location.pathname === "/" && (
          <button
            onClick={() => {
              handleTabularView();
            }}
            className="switchBtn"
          >
            {tabularView ? "Switch To Search" : "Switch To Tabular"}
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
