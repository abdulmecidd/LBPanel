const Country = (props) => {
  return (
    <>
      <div className="flex items-center justify-center p-xl ">
        <img className="rounded-sm w-8 h-8" src={props.flag} />
        <h1 className="text-3xl font-bold">{props.country}</h1>
      </div>
    </>
  );
};

export default Country;
