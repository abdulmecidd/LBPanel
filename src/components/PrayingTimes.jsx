import Card from "./main_elements/Card";
import { FaMosque } from "react-icons/fa";
import Prayings from "./main_elements/Praying/Prayings";
import Dropdown from "./main_elements/Dropdown";

const PrayingTimes = () => {
  return (
    <>
      <Card>
        <header className="flex gap-2 p-[1rem] text-[white] items-center rounded-t-xl bg-gradient-to-t from-rose-of-sharon-400 to-rose-of-sharon-600">
          <FaMosque className="h-12 w-12 mr-2 text-[]" />
          <div className="">
            <h1 className="text-4xl font-semibold">Praying Times</h1>
            <div className="flex gap-4 mt-2 items-center">
              <Dropdown>
                <option>Uskudar</option>
                <option>Kartal</option>
                <option>Maltepe</option>
              </Dropdown>
              <div className="bg-[white] rounded-md h-8 w-12 items-center justify-center flex">
                <p className="font-semibold text-[80%] text-rose-of-sharon-600">
                  12:59
                </p>
              </div>
            </div>
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
