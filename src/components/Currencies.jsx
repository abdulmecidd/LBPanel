import Card from "./Card";
import Currency from "./elements/Currency";
import axios from "axios";
import { useEffect, useState } from "react";
import { CURRENCY_API_KEY } from "../../api";
import SearchBox from "./elements/SearchBox";

function Currencies(props) {
  const [currency, setCurrency] = useState(null);
  const [currencies, setCurrencies] = useState([]);
  const [symbol, setSymbol] = useState(null);
  const [targetCode, setTargetCode] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://v6.exchangerate-api.com/v6/${CURRENCY_API_KEY}/latest/USD`
        );
        const data = response.data;
        setTargetCode(data.target_code);
        setCurrency(data.conversion_rate);
        setCurrencies(Object.entries(data.conversion_rates));
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    currencies.map((currency, value) => {
      console.log(currency, value);
    });
    return () => {};
  }, []);
  return (
    <>
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
                    key={value}
                    currency={currency[0]}
                    symbol="€"
                    value={currency[1]}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </Card>
    </>
  );
}
export default Currencies;
