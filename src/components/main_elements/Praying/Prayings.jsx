import { useContext, useEffect, useState } from "react";
import Praying from "./Praying";
import {
  FaSun,
  FaMoon,
  FaCloudSun,
  FaRegSun,
  FaCloudMoon,
} from "react-icons/fa";
import { Context } from "../../../Context";
import axios from "axios";

const Prayings = () => {
  const { userCity, userCountry } = useContext(Context);
  const [prayingtimes, setPrayingTimes] = useState([]);

  const today = new Date();
  const yyyy = today.getFullYear();
  let mm = today.getMonth() + 1;
  let dd = today.getDate();
  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;
  const formattedToday = dd + "-" + mm + "-" + yyyy;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.aladhan.com/v1/timingsByCity/${formattedToday}?city=${userCity}&country=${userCountry}&method=1`
        );
        setPrayingTimes(response.data.data.timings);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [userCity]);
  return (
    <>
      <div key={prayingtimes.Fajr}>
        <Praying
          key={prayingtimes.Fajr}
          icon={<FaCloudMoon />}
          prayingname="Fajr"
          times={prayingtimes.Fajr}
        />
        <Praying
          key={prayingtimes.Dhuhr}
          icon={<FaRegSun />}
          times={prayingtimes.Dhuhr}
          prayingname="Shurooq"
        />
        <Praying
          key={prayingtimes.Asr}
          icon={<FaSun />}
          times={prayingtimes.Asr}
          prayingname="Dhuhr"
        />
        <Praying
          key={prayingtimes.Maghrib}
          icon={<FaCloudSun />}
          times={prayingtimes.Maghrib}
          prayingname="Asr"
        />
        <Praying
          key={prayingtimes.Isha}
          icon={<FaMoon />}
          times={prayingtimes.Isha}
          prayingname="Isha"
        />
      </div>
    </>
  );
};

export default Prayings;
