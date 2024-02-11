import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./search.css";

const SearchBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  const [recentSearches, setRecentSearches] = useState([]);

  useEffect(() => {
    const storedSearches = JSON.parse(localStorage.getItem("recentSearches"));
    if (storedSearches && Array.isArray(storedSearches)) {
      setRecentSearches(storedSearches);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("recentSearches", JSON.stringify(recentSearches));
  }, [recentSearches]);

  function handleClick() {
    const updatedSearches = [
      ...new Set([searchValue, ...recentSearches]),
    ].slice(0, 4);
    setRecentSearches(updatedSearches);
    localStorage.setItem("recentSearches", JSON.stringify(updatedSearches));
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
