import axios from "axios";
import { useEffect, useState, useContext } from "react";
import Dropdown from "./main_elements/Dropdown";
import Loading from "./main_elements/LoadingAnimation/Loading";
import { Context } from "../Context";
import { STATE_DATA_API } from "../api";

const Country = (props) => {
  const { userCity, flag, status } = useContext(Context);
  const [districts, setDistricts] = useState([]);

  useEffect(() => {
    if (!userCity) {
      return;
    }
    async function fetchTown() {
      try {
        let requestOptions = {
          method: "GET",
          url: `https://api.countrystatecity.in/v1/countries/${flag.toUpperCase()}/states`,
          headers: {
            "X-CSCAPI-KEY": STATE_DATA_API,
          },
        };
        const response = await axios(requestOptions);
        setDistricts(response.data);
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
