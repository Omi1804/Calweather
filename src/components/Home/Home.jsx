import { useState, useEffect } from "react";
import SearchBar from "../Elements/SearchBar/SearchBar";
import Recent from "../RecentCard/Recent";
import { useSelector } from "react-redux";
import "./home.css";

const Home = () => {
  const recentCities = useSelector((state) => state.cities.recentSearches);

  return (
    <section className="homeSec">
      <div className="homeSearch">
        <SearchBar />
      </div>
      <div className="recentSearches">
        <p>RECENT LOCATIONS</p>
        <div className="recentCards">
          {recentCities
            ? recentCities.map((item) => <Recent item={item} key={item} />)
            : ""}
        </div>
      </div>
    </section>
  );
};

export default Home;
