import { useContext } from "react";
import Country from "./components/Country.jsx";
import "./App.css";
import BorsaIstanbul from "./components/BorsaIstanbul.jsx";
import Weather from "./components/Weather.jsx";
import TwitterWidget from "./components/TwitterWidget.jsx";
import PrayingTimes from "./components/PrayingTimes.jsx";
import News from "./components/News.jsx";
import FlickerWidget from "./components/FlickerWidget.jsx";
import Currencies from "./components/Currencies.jsx";
import { Context } from "./Context.jsx";

function App() {
  const { userCity, userCountry, flag } = useContext(Context);

  return (
    <>
      <Country
        flag={`https://www.countryflagicons.com/FLAT/64/${flag}.png`}
        country={userCountry}
        city={userCountry}
      />
      <div className="mb-4 flex flex-wrap sm:flex-col md:flex-row gap-4 md:gap-4 xl:flex-row container xl:gap-6 m-auto grid-cols-4 sm:grid-cols-1 md:grid-cols-2">
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
