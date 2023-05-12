import { useEffect, useState } from "react";
import Card from "./Card.jsx";
import Loading from "./Loading.jsx";
import axios from "axios";
import { WEATHER_API_KEY } from "../../api.js";
import {
  WiCloudy,
  WiDaySunny,
  WiRain,
  WiSnowWind,
} from "../../node_modules/react-icons/wi";

function Weather(props) {
  const [weatherdata, setWeatherdata] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${WEATHER_API_KEY}`
        );
        setWeatherdata(response.data);
        setLoading(true);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    const interval = setInterval(() => {
      try {
        fetchData();
      } catch (error) {
        console.log(error);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [props.city]);

  let icons = null;
  switch (weatherdata?.weather[0]?.main) {
    case "Clouds":
      icons = <WiCloudy />;
      break;
    case "Clear":
      icons = <WiDaySunny />;
      break;
    case "Rain":
      icons = <WiRain />;
      break;
    case "Snow":
      icons = <WiSnowWind />;
      break;
    default:
      break;
  }
  return (
    <>
      {loading ? (
        <Card>
          <div className="header p-sm">
            <div className="mb-4">
              <h1 className="text-4xl text-indigo-950 font-main font-bold">
                {props.city}
              </h1>
            </div>
            <div className="flex items-center gap-8">
              <h2 className="text-6xl text-indigo-950 font-main">
                {Math.floor(weatherdata.main.temp - 273.15)}°
              </h2>
              <div className="text-6xl text-indigo-950">{icons}</div>
            </div>
          </div>
        </Card>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default Weather;
