import "./detail.css";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import Graph from "../Elements/Graph/Graph";
import { addSearch } from "../../reduxFiles/citiesRedux";

const Detail = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  const [tempType, setTempType] = useState("celcius");
  const [tempInfo, setTempInfo] = useState({});
  const [weatherState, setWeatherState] = useState("");
  const [moreInfo, setMoreInfo] = useState(false);
  const API_KEY = import.meta.env.VITE_OPEN_WEATHER_API;

  const getWeatherInfo = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${params.city}&units=metric&appid=${API_KEY}`;
      let res = await fetch(url);
      let data = await res.json();
      const { temp, humidity, pressure } = data.main;
      const { main: weathermood } = data.weather[0];
      const { name } = data;
      const { speed } = data.wind;
      const { country, sunset } = data.sys;

      let convertedTemp = temp;
      if (tempType === "fahrenheit") {
        convertedTemp = (temp * 9) / 5 + 32;
      }
      let sec = sunset;
      let date = new Date(sec * 1000);
      let timeStr = `${date.getHours()}:${date.getMinutes()}`;
      if (weathermood) {
        switch (weathermood) {
          case "Clouds":
            setWeatherState("wi-day-cloudy");
            break;
          case "Haze":
            setWeatherState("wi-fog");
            break;
          case "Clear":
            setWeatherState("wi-day-sunny");
            break;
          case "Mist":
            setWeatherState("wi-dust");
            break;

          default:
            setWeatherState("wi-day-sunny");
            break;
        }
      }

      const myNewWeatherInfo = {
        temp: Math.floor(convertedTemp),
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset: timeStr,
      };
      setTempInfo(myNewWeatherInfo);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    dispatch(addSearch(params.city));
    getWeatherInfo();
  }, [dispatch, params.city, tempType]);

  function handleTempChange() {
    setTempType((prev) => (prev === "celcius" ? "fahrenheit" : "celcius"));
  }

  return (
    <section className="detailedWeather">
      <button
        className="goBackButton"
        onClick={() => {
          navigate("/");
        }}
      >
        <span className="material-symbols-outlined">keyboard_backspace</span>
        <p>Go back</p>
      </button>
      {!moreInfo && (
        <div>
          <div className="detailedCard">
            <div className="header">
              <p>Current Weather</p>
              <div className="date"> {new Date().toLocaleString()}</div>
            </div>
            <hr />
            <div className="cardPartitions">
              <div className="sec1">
                <div className="weatherDetail">
                  <div className="weatherIcon">
                    <i className={`wi ${weatherState}`}></i>
                  </div>

                  <p className="temp">
                    {tempInfo.temp
                      ? tempType === "celcius"
                        ? `${tempInfo.temp}°C`
                        : `${tempInfo.temp}°F`
                      : "Not Found"}
                  </p>
                </div>
                <div className="weatherMood">
                  <p className="mood">{tempInfo.weathermood}</p>
                  <p className="place">
                    {tempInfo.name ? tempInfo.name : "NA"}, India
                  </p>
                </div>
              </div>
              <div className="sec2">
                <div className="sunset">
                  <div className="icon">
                    <i className={"wi wi-sunset"}></i>
                    <p>Sunset</p>
                  </div>
                  <p>{tempInfo.sunset ? `${tempInfo.sunset} PM` : "NA"}</p>
                </div>
                <hr />
                <div className="humidity">
                  <div className="icon">
                    <i className={"wi wi-humidity"}></i>
                    <p>Humidity</p>
                  </div>
                  <p>{tempInfo.humidity ? tempInfo.humidity : "NA"} </p>
                </div>
                <hr />
                <div className="rain">
                  <div className="icon">
                    <i className={"wi wi-rain"}></i>
                    <p>Pressure</p>
                  </div>
                  <p>{tempInfo.pressure ? tempInfo.pressure : "NA"} </p>
                </div>
                <hr />
                <div className="windSpeed">
                  <div className="icon">
                    <i className={"wi wi-strong-wind"}></i>
                    <p>Speed</p>
                  </div>
                  <p>{tempInfo.speed ? tempInfo.speed : "NA"} </p>
                </div>
              </div>
            </div>
          </div>
          <div className="moreDetails">
            <button onClick={handleTempChange}>
              {tempType === "celcius" ? "Celsius" : "Fahrenheit"}
            </button>
            <p onClick={() => setMoreInfo((prev) => !prev)}>
              More Info
              <span className="material-symbols-outlined">arrow_right_alt</span>
            </p>
          </div>
        </div>
      )}
      {tempInfo.temp
        ? moreInfo && (
            <div className="moreInfo">
              <p>Previous Temperatures</p>
              <hr />
              <Graph />
            </div>
          )
        : moreInfo && (
            <div className="moreInfo">
              <p>No Data Availaible</p>
            </div>
          )}
    </section>
  );
};

export default Detail;
