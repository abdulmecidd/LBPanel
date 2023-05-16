function Currency(props) {
  return (
    <>
      <div className="flex gap-4 mb-2 items-center">
        <div className="icon text-[white] font-main font-semibold text-xl  w-2 h-2 text-center rounded-full bg-indigo-700 "></div>
        <div className="currency ">
          <h3 className="text-2xl font-semibold text-indigo-900 font-main">
            {props.currency}
          </h3>
        </div>
        <h4 className="font-main text-indigo-300 font-medium text-md">
          {props.value}
        </h4>
      </div>
    </>
  );
}
export default Currency;
