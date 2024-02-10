import "./recent.css";
import { useNavigate } from "react-router-dom";

const Recent = ({ item }) => {
  const navigate = useNavigate();
  function getRandomValue() {
    const random = Math.floor(Math.random() * 10 + 20);
    return random;
  }

  function handleClick() {
    navigate(`/${item}`);
  }
  return (
    <article className="recentCard" onClick={handleClick}>
      <div className="weatherIcon">
        <i className={`wi wi-day-sunny`}></i>
      </div>
      <div className="weatherInfo">
        <div className="temperature">
          <span>{getRandomValue()}° C</span>
          <p>Clear</p>
        </div>
        <div className="place">{item}, Ind</div>
      </div>
      <div className="extraTemp">
        <div className="humidity">
          <p>
            <i className={"wi wi-humidity"}></i>
          </p>
          <p className="extra-info-leftside">34</p>
        </div>

        <div className="windSpeed">
          <p>
            <i className={"wi wi-strong-wind"}></i>
          </p>
          <p className="extra-info-leftside">123</p>
        </div>
      </div>
    </article>
  );
};

export default Recent;
