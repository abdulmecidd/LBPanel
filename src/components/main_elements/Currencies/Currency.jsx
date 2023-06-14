import { useEffect, useState } from "react";

const Currency = (props) => {
  const [previousValue, setpreviousValue] = useState("");
  const [previousChange, setPreviousChange] = useState("");
  const [ping, setPing] = useState(false);

  useEffect(() => {
    if (previousChange !== props.change) {
      setPreviousChange(props.change);
      setTimeout(() => {
        setPing(true);
        setTimeout(() => {
          setPing(false);
        }, 2000);
      }, 0);
    }

    if (props.value !== previousValue) {
      setpreviousValue(props.value);
      setTimeout(() => {
        setPing(true);
        setTimeout(() => {
          setPing(false);
        }, 2000);
      }, 0);
    }
  }, [props.value]);
  return (
    <>
      <div className="flex items-center gap-4 mb-4">
        {ping ? (
          <div className="bg-dodger-blue-300 h-4 w-4 rounded-full">
            <div className="bg-dodger-blue-400 h-4 w-4 rounded-full animate-ping"></div>
          </div>
        ) : (
          ""
        )}
        <div className="currency font-semibold ml-2">
          <p>{props.currency}</p>
        </div>
        <div className="value font-extralight ml-auto text-gray">
          <p
            className={
              props.value === previousValue
                ? `font-light text-[black]`
                : props.value > previousValue
                ? "font-bold text-[green]"
                : "font-bold text-[red]"
            }
          >
            {previousValue}
          </p>
          <p
            className={
              previousChange > props.change || props.change.startsWith("-", 0)
                ? `text-[red] text-[0.8rem] text-right font-semibold`
                : previousChange === props.change
                ? "text-[black] text-right text-[0.8rem] font-semibold"
                : `text-[green] text-[0.8rem] text-right font-semibold`
            }
          >
            {previousChange}%
          </p>
        </div>
      </div>
    </>
  );
};
export default Currency;
