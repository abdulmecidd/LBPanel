import { FaSun, FaMoon, FaCloudSun, FaRegSun } from "react-icons/fa";

const Praying = (props) => {
  const isEnabled = props.enabled ? "bg-rose-of-sharon-100" : "bg-[white]";

  return (
    <>
      <div className={`h-full ${isEnabled}  flex p-[1rem] rounded-md`}>
        <FaRegSun />
        <p className="ml-auto">{props.times}</p>
      </div>
    </>
  );
};
export default Praying;
