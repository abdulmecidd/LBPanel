import Card from "./main_elements/Card";
import { WiCloud, WiRain, WiSnow, WiDaySunny } from "react-icons/wi";
import Dropdown from "./main_elements/Dropdown";

const Weather = (props) => {
  return (
    <>
      <Card>
        <header className="h-auto rounded-t-xl p-[1rem] bg-gradient-to-b from-blue via-blue to-aquamarine-blue-300">
          <div className="flex items-center m-4 text-aquamarine-blue-50">
            <div className="text-left mr-auto items-end">
              <h1 className="font-main font-extralight text-xl">Sunny</h1>
              <h2 className="text-6xl font-light">20°</h2>
              <h2 className="text-[1rem] font-light">
                <p> Kartal </p>
              </h2>
            </div>
            <WiDaySunny className="text-[8rem] text-blue-100" />
          </div>
        </header>
        <section className="p-sm gap-4">
          <div className="flex items-center gap-8 justify-center">
            <p className="mr-auto text-aquamarine-blue-800">Wind</p>
            <p>N 8Mph</p>
          </div>
          <div className="flex items-center gap-8 justify-center">
            <p className="mr-auto text-aquamarine-blue-800">Humidity</p>
            <p>52%</p>
          </div>
          <div className="flex items-center gap-8 justify-center">
            <p className="mr-auto text-aquamarine-blue-800">Pressure</p>
            <p>30.19 in</p>
          </div>
        </section>
      </Card>
    </>
  );
};

export default Weather;
