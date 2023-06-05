import { useEffect, useState } from "react";

const Currency = (props) => {
  const [previousValue, setpreviousValue] = useState("");
  const [previousChange, setPreviousChange] = useState("");

  useEffect(() => {
    if (previousChange !== props.change) {
      setPreviousChange(props.change);
    }

    if (props.value !== previousValue) {
      setpreviousValue(props.value);
    }
  }, [props.value]);
  return (
    <>
      <div className="flex items-center gap-4 mb-4">
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
