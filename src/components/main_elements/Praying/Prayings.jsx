import { useContext, useEffect, useState, React } from "react";
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
import { PRAYERTIMES_DATA_API } from "../../../api";
import Loading from "../LoadingAnimation/Loading";

const Prayings = ({ city }) => {
  const { userCity } = useContext(Context);
  const [prayingtimes, setPrayingTimes] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://muslimsalat.p.rapidapi.com/${city}.json`,
          {
            headers: {
              "X-RapidAPI-Key": PRAYERTIMES_DATA_API,
              "X-RapidAPI-Host": "muslimsalat.p.rapidapi.com",
            },
          }
        );
        setPrayingTimes(response.data.items);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [userCity]);

  return (
    <>
      {prayingtimes && prayingtimes.length > 0 ? (
        prayingtimes.map((item) => (
          <div key={item.fajr}>
            <Praying
              key={item.fajr}
              icon={<FaCloudMoon />}
              prayingname="Fajr"
              times={item.fajr}
            />
            <Praying
              key={item.shurooq}
              icon={<FaRegSun />}
              times={item.shurooq}
              prayingname="Shurooq"
            />
            <Praying
              key={item.dhuhr}
              icon={<FaSun />}
              times={item.dhuhr}
              prayingname="Dhuhr"
            />
            <Praying
              key={item.asr}
              icon={<FaCloudSun />}
              times={item.asr}
              prayingname="Asr"
            />
            <Praying
              key={item.isha}
              icon={<FaMoon />}
              times={item.isha}
              prayingname="Isha"
            />
          </div>
        ))
      ) : (
        <Loading />
      )}
    </>
  );
};
export default Prayings;
