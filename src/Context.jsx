import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const Context = createContext();

export const GlobalProvider = (props) => {
  const [userCountry, setuserCountry] = useState("");
  const [flag, setFlag] = useState("");
  const [userCity, setUserCity] = useState("");
  const [status, setStatus] = useState(false);
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
    });
  }, [userCity]);

  return (
    <Context.Provider
      value={{
        userCity,
        userCountry,
        flag,
        status,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
