const Praying = (props) => {
  const isEnabled = props.enabled ? "bg-rose-of-sharon-100 " : "bg-[white]";
  return (
    <>
      <div
        className={`h-full ${isEnabled}  flex p-[1rem] items-center rounded-md`}
      >
        <div className="flex gap-2 items-center font-semibold">
          {props.icon}
          <p>{props.prayingname}</p>
        </div>

        <p className="ml-auto">{props.times}</p>
      </div>
    </>
  );
};
export default Praying;
