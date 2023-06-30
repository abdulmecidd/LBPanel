import { useEffect, useState } from "react";
import Card from "./main_elements/Card";
import Currency from "./main_elements/Currencies/Currency";
import Loading from "./main_elements/LoadingAnimation/Loading";

const Currencies = () => {
  const [usdPrice, setUsdPrice] = useState("");
  const [usdChange, setUsdChange] = useState("");
  const [eurChange, setEurChange] = useState("");
  const [EurUsdChange, setEurUsdChange] = useState("");
  const [eurPrice, setEurPrice] = useState("");
  const [eurUsdPrice, setEurUsdPrice] = useState("");

  useEffect(() => {
    const ws = new WebSocket("wss://nc.ciner.com.tr/sub/htfinans");

    ws.onopen = () => {
      console.log("socket connected");
    };
    ws.onmessage = (e) => {
      const data = JSON.parse(e.data);
      if (data.SecuritySlug.includes("dolar")) {
        setUsdPrice(data.Ask);
        setUsdChange(data.PercentChange.substr(1));
      } else if (data.SecuritySlug.includes("euro")) {
        setEurPrice(data.Ask);
        setEurChange(data.PercentChange.substr(1));
      } else if (data.SecuritySlug.includes("eur-usd")) {
        setEurUsdPrice(data.Ask);
        setEurUsdChange(data.PercentChange.substr(1));
      }
    };

    ws.onerror = (err) => {
      console.log(err);
    };
  });
  return (
    <>
      <Card>
        <header className="rounded-t-xl bg-gradient-to-t from-blue to-dodger-blue-600 h-auto p-[1rem]">
          <h1 className="mb-2 font-medium text-4xl text-[white]">Currencies</h1>
        </header>
        <section className="p-[1rem]">
          {usdPrice ? (
            <>
              <Currency currency="USD" value={usdPrice} change={usdChange} />
              <Currency currency="EUR" value={eurPrice} change={eurChange} />
              <Currency
                currency="EUR/USD"
                value={eurUsdPrice}
                change={EurUsdChange}
              />
            </>
          ) : (
            <Loading />
          )}
        </section>
      </Card>
    </>
  );
};

export default Currencies;
