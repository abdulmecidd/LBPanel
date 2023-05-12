import { useEffect, useState } from "react";
import Country from "./components/Country.jsx";
import Weather from "./components/Weather.jsx";
import Currencies from "./components/Currencies.jsx";
import "./App.css";
import axios from "axios";

function App() {
  const [userLocation, setuserLocation] = useState("");
  const [flag, setFlag] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (location) => {
      const { latitude, longitude } = location.coords;
      const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
      const response = await axios.get(url);
      setuserLocation(response.data);
      setFlag(response.data.address.country_code);
    });
  }, []);

  return (
    <>
      <Country
        flag={`https://www.countryflagicons.com/FLAT/64/${flag.toUpperCase()}.png`}
        country={userLocation?.address?.country}
      />
      <div className="grid gap-8 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 p-sm">
        <Weather city={userLocation?.address?.province} />
        <Currencies />
      </div>
    </>
  );
}

export default App;
