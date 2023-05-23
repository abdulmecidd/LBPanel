import axios from "axios";
import { useEffect, useState, useContext } from "react";
import Dropdown from "./main_elements/Dropdown";
import Loading from "./main_elements/LoadingAnimation/Loading";
import { Context } from "../Context";

const Country = (props) => {
  const { userCity, status } = useContext(Context);
  const [districts, setDistricts] = useState([]);

  useEffect(() => {
    async function fetchTown() {
      const options = {
        method: "GET",
        url: "https://countries-states-cities-dataset.p.rapidapi.com/list-countries-cities",
        headers: {
          "X-RapidAPI-Key":
            "b207f9be37msh5d067842d345311p1fb09ejsn0bbf0e6d4207",
          "X-RapidAPI-Host": "countries-states-cities-dataset.p.rapidapi.com",
        },
      };
      try {
        const response = await axios.get(
          "https://wft-geo-db.p.rapidapi.com/v1/geo/countries/TR/places",
          {
            method: "GET",
            headers: {
              "X-RapidAPI-Key":
                "269d13724cmsh601f5a14755deabp1bd9adjsn2e661f2dc645",
              "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
            },
          }
        );
        setDistricts(data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchTown();
  }, [userCity]);
  return (
    <>
      <div className="flex items-center justify-center p-xl bg-[white] mb-4 font-main gap-2">
        {status ? (
          <>
            <img className="rounded-xl  w-8 h-8 mr-1" src={props.flag} />
            <h1 className="text-3xl text-main font-main text-indigo-950 font-bold">
              {props.country}
            </h1>
            <Dropdown>
              {districts.map((district, index) => (
                <option key={index}>{district.name}</option>
              ))}
            </Dropdown>{" "}
          </>
        ) : (
          <Loading />
        )}
      </div>
    </>
  );
};

export default Country;
