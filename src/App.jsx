import { useEffect, useState } from "react";
import Country from "./components/Country.jsx";
import "./App.css";
import axios from "axios";
import BorsaIstanbul from "./components/BorsaIstanbul.jsx";
import Weather from "./components/Weather.jsx";
import TwitterWidget from "./components/TwitterWidget.jsx";
import PrayingTimes from "./components/PrayingTimes.jsx";
import News from "./components/News.jsx";
import FlickerWidget from "./components/FlickerWidget.jsx";
import Currencies from "./components/Currencies.jsx";

function App() {
  const [userCountry, setuserCountry] = useState("");
  const [flag, setFlag] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (location) => {
      const { latitude, longitude } = location.coords;
      const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
      const response = await axios.get(url);
      setuserCountry(response.data.address.country);
      setFlag(response.data.address.country_code);
    });
  }, []);

  return (
    <>
      <Country
        flag={`https://www.countryflagicons.com/FLAT/64/${flag.toUpperCase()}.png`}
        country={userCountry}
      />
      <div className="grid container m-4">
        <Weather />
        <Currencies />
        <PrayingTimes />
        <News />
        <FlickerWidget />
        <TwitterWidget />
        <BorsaIstanbul />
      </div>
    </>
  );
}

export default App;
