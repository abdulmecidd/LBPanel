const BistIndices = (props) => {
  return (
    <>
      <div className="p-[1rem] gap-8 flex items-center">
        <div className="">
          <h1 className="font-semibold">{props.code}</h1>
          <p className="font-extralight">{props.longName}</p>
        </div>
        <div className="ml-auto">
          <p className="font-semibold">{props.value}</p>
          <p className="text-[0.8rem] text-[red]">{props.rise}</p>
        </div>
      </div>
    </>
  );
};

export default BistIndices;
