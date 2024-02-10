import { useState, useEffect } from "react";
import SearchBar from "../Elements/SearchBar/SearchBar";
import Recent from "../RecentCard/Recent";
import "./home.css";

const Home = () => {
  const [recentCities, setRecentCities] = useState(
    localStorage.getItem("recentSearches")
  );

  return (
    <section className="homeSec">
      <div className="homeSearch">
        <SearchBar />
      </div>
      <div className="recentSearches">
        <p>RECENT LOCATIONS</p>
        <div className="recentCards">
          {recentCities
            ? JSON.parse(recentCities).map((item) => (
                <Recent item={item} key={item} />
              ))
            : ""}
        </div>
      </div>
    </section>
  );
};

export default Home;
