import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const Context = createContext();

export const GlobalProvider = (props) => {
  const [userCountry, setuserCountry] = useState("");
  const [flag, setFlag] = useState("");
  const [userCity, setUserCity] = useState("");
  const [status, setStatus] = useState(false);
  const [time, setTime] = useState(null);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (location) => {
      try {
        const { latitude, longitude } = location.coords;
        const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
        const response = await axios.get(url);
        const { country, country_code, province } = response.data.address;
        setuserCountry(country);
        setFlag(country_code.toUpperCase());
        setUserCity(province);
        setStatus(true);
      } catch (error) {
        console.log(error);
      }
      const getCurrentTime = () => {
        const currentTime = new Date();
        const hour = currentTime.getHours();
        const minute = currentTime.getMinutes();
        const period = hour >= 12 ? "PM" : "AM";
        const formattedHour = hour % 12 || 12;
        const time = formattedHour + ":" + minute + " " + " " + period;
        setTime(time);
      };

      getCurrentTime();
      const interval = setInterval(getCurrentTime, 1000);
      return () => clearInterval(interval);
    });
  }, []);

  const updateUserCity = (city) => {
    setUserCity(city);
  };

  return (
    <Context.Provider
      value={{
        userCity,
        userCountry,
        flag,
        status,
        updateUserCity,
        time,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
