import Card from "./main_elements/Card";
import { FaMosque } from "react-icons/fa";
import Prayings from "./main_elements/Praying/Prayings";
import { useContext } from "react";
import { Context } from "../Context";
import Loading from "./main_elements/LoadingAnimation/Loading";

const PrayingTimes = () => {
  const { userCity, status, time } = useContext(Context);
  return (
    <>
      <Card>
        <header className="flex gap-2 p-[1rem] text-[white] items-center rounded-t-xl bg-gradient-to-t from-rose-of-sharon-400 to-rose-of-sharon-600">
          {status ? (
            <>
              <FaMosque className="h-12 w-12 mr-2 text-[]" />
              <div className="">
                <h1 className="text-4xl font-semibold">Praying Times</h1>
                <div className="flex gap-4 mt-2 items-center">
                  <p>{userCity}</p>
                  <div className="bg-[white] rounded-md h-8 w-auto p-[1rem] items-center justify-center flex">
                    <p className="font-semibold text-[80%] text-rose-of-sharon-600">
                      {time}
                    </p>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <Loading />
          )}
        </header>
        <section className="text-text ">
          {status ? <Prayings city={userCity} /> : <Loading />}
        </section>
      </Card>
    </>
  );
};

export default PrayingTimes;
