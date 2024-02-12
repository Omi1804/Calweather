import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./search.css";
import { addSearch } from "../../../reduxFiles/citiesRedux";

const SearchBar = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");

  function handleClick() {
    dispatch(addSearch(searchValue));
    navigate(`/${searchValue}`);
  }

  return (
    <div className={`${location.pathname !== "/" ? "otherPage" : ""} seachBar`}>
      <span className="material-symbols-outlined searchIcon">search</span>
      <input
        type="text"
        placeholder="Search Your City"
        onChange={(e) => setSearchValue(e.target.value)}
        id="search"
        value={searchValue}
      />
      <button className="button" onClick={handleClick}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
