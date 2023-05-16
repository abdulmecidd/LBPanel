import Card from "./Card";
import Currency from "./elements/Currency";
import Loading from "./Loading";
import axios from "axios";
import { useEffect, useState } from "react";
import { CURRENCY_API_KEY } from "../../api";
import SearchBox from "./elements/SearchBox";

function Currencies(props) {
  const [currencies, setCurrencies] = useState([]);
  const [calculate, setCalculate] = useState(null);
  const [loading, setLoading] = useState(false);
  // const handleChange

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios
          .get(`https://api.collectapi.com/economy/allCurrency`, {
            params: {
              int: 1,
              base: "USD",
            },
            headers: {
              "Content-Type": "application/json",
              Authorization:
                "apikey 05GbyLqxn5tOVtEVJLIlVd:5a26RaXe0Vs1pXhFFOyvcu",
            },
          })
          .then((response) => {
            const data = response.data.result;
            setCurrencies(data);
            setLoading(true);
          })
          .catch((error) => {
            console.log(error);
          });
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    const interval = setInterval(() => {
      try {
        fetchData();
      } catch (error) {
        console.log(error);
      }
    }, 100000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <>
      {loading ? (
        <Card>
          <div className="m-4 w- sm:w- md:w-">
            <header className="pb-[0.5rem]">
              <h1 className="text-3xl font-main items-left font-bold text-indigo-950">
                Currencies
              </h1>
              <SearchBox />
            </header>
            <div className="m-2">
              <div className="overflow-y-scroll h-48">
                {currencies.map((currency, value) => {
                  return (
                    <Currency
                      currency={currency.code.slice(0, 5)}
                      key={value}
                      value={currency.selling}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </Card>
      ) : (
        <Loading />
      )}
    </>
  );
}
export default Currencies;
