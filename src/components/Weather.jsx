import Card from "./main_elements/Card";
import {
  WiCloud,
  WiRain,
  WiSnow,
  WiDaySunny,
  WiDayCloudy,
} from "react-icons/wi";
import Dropdown from "./main_elements/Dropdown";
import { WEATHER_DATA_API } from "../api";
import { useContext, useEffect, useState } from "react";
import Loading from "./main_elements/LoadingAnimation/Loading";
import { Context } from "../Context";
import axios from "axios";

const Weather = (props) => {
  const [status, setStatus] = useState(false);
  const [weatherData, setWeatherData] = useState(null);
  const { userCity, userCountry, flag } = useContext(Context);
  let weatherIcon = null;

  useEffect(() => {
    if (!userCity) {
      return;
    }
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${userCity}&appid=${WEATHER_DATA_API}`
        );
        const { feels_like, humidity, pressure } = response.data.main;
        const wind = response.data.wind.speed;
        const description = response.data.weather[0].description;
        setWeatherData({ feels_like, humidity, pressure, description, wind });
        setStatus(true);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();

    const intervalID = setInterval(fetchData, 15 * 60 * 1000);

    return () => clearInterval(intervalID);
  }, [userCity]);

  switch (true) {
    case status && weatherData.description.toLowerCase().includes("broken"):
      weatherIcon = <WiDayCloudy className="text-[8rem] text-blue-100" />;
      break;
    case status && weatherData.description.toLowerCase().includes("sun"):
      weatherIcon = <WiDaySunny className="text-[8rem] text-blue-100" />;
      break;
    case status && weatherData.description.toLowerCase().includes("rain"):
      weatherIcon = <WiRain className="text-[8rem] text-blue-100" />;
      break;
    case status && weatherData.description.toLowerCase().includes("snow"):
      weatherIcon = <WiSnow className="text-[8rem] text-blue-100" />;
    default:
      weatherIcon = null;
  }
  return (
    <>
      <Card>
        <header className="h-auto rounded-t-xl p-[1rem] bg-gradient-to-b from-blue via-blue to-aquamarine-blue-300">
          {status ? (
            <div className="flex items-center m-4 text-aquamarine-blue-50">
              <div className="text-left mr-auto items-end">
                <h1 className="font-main font-extralight text-xl">
                  {weatherData && weatherData.description}
                </h1>
                <h2 className="text-6xl font-light">
                  {weatherData && Math.floor(weatherData.feels_like - 273)}°
                </h2>
                <h2 className="text-[1rem] font-light">{userCity}</h2>
              </div>
              {weatherIcon}
            </div>
          ) : (
            <>
              <Loading />
            </>
          )}
        </header>
        <section className="p-sm gap-4">
          {status ? (
            <>
              <div className="flex items-center gap-8 justify-center">
                <p className="mr-auto text-aquamarine-blue-800">Wind</p>
                <p>{weatherData && weatherData.wind}</p>
              </div>
              <div className="flex items-center gap-8 justify-center">
                <p className="mr-auto text-aquamarine-blue-800">Humidity</p>
                <p>{weatherData && weatherData.humidity}%</p>
              </div>
              <div className="flex items-center gap-8 justify-center">
                <p className="mr-auto text-aquamarine-blue-800">Pressure</p>
                <p>{weatherData && weatherData.pressure} in</p>
              </div>
            </>
          ) : (
            <>
              <Loading />
            </>
          )}
        </section>
      </Card>
    </>
  );
};

export default Weather;
