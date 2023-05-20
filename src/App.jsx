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
      console.log(response);
    });
  }, []);

  return (
    <>
      <Country
        flag={`https://www.countryflagicons.com/FLAT/64/${flag.toUpperCase()}.png`}
        country={userCountry}
      />
      <div className="mb-4 flex flex-wrap sm:flex-col md:flex-row gap-4 md:gap-4 xl:flex-row container xl:gap-8 m-auto grid-cols-4 sm:grid-cols-1 md:grid-cols-2">
        <Weather />
        <News />
        <PrayingTimes />
        <Currencies />
        <BorsaIstanbul />
        <TwitterWidget />
        <FlickerWidget />
      </div>
    </>
  );
}

export default App;
