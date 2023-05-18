const Currency = (props) => {
  return (
    <>
      <div className="flex items-center gap-4 mb-4">
        <div className="ping">
          <span class="relative flex h-3 w-3">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-dodger-blue-500 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-3 w-3 bg-dodger-blue-500"></span>
          </span>
        </div>
        <div className="currency font-semibold ml-2">
          <p>{props.currency}</p>
        </div>
        <div className="value font-extralight ml-auto text-gray">
          <p>{props.value}</p>
        </div>
      </div>
    </>
  );
};
export default Currency;
