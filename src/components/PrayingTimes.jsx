import Card from "./main_elements/Card";
import { FaMosque } from "react-icons/fa";
import Prayings from "./main_elements/Prayings";
import Dropdown from "./main_elements/Dropdown";

const PrayingTimes = () => {
  return (
    <>
      <Card>
        <header className="flex gap-2 p-[1rem] text-rose-of-sharon-50 items-center rounded-t-xl bg-gradient-to-t from-rose-of-sharon-400 to-rose-of-sharon-600">
          <FaMosque className="h-12 w-12 mr-2 text-[]" />
          <div className="">
            <h1 className="text-4xl font-semibold text-[]">Praying Times</h1>
            <Dropdown>
              <option>Uskudar</option>
              <option>Kartal</option>
              <option>Maltepe</option>
            </Dropdown>
          </div>
          <div className="bg-[white] rounded-md ml-auto h-8 w-12 items-center justify-center flex">
            <p className="font-semibold text-[80%] text-rose-of-sharon-600">
              12:59
            </p>
          </div>
        </header>
        <section className="text-text ">
          <Prayings />
        </section>
      </Card>
    </>
  );
};

export default PrayingTimes;
