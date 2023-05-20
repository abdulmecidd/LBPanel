import Praying from "./Praying";
import { FaSun, FaMoon, FaCloudSun, FaRegSun } from "react-icons/fa";

const Prayings = (props) => {
  return (
    <>
      <Praying icon={FaRegSun} times="5.00am" />
      <Praying enabled={true} icon="<FaRegSun />" times="5.00am" />
      <Praying icon="<FaRegSun />" times="5.00am" />
      <Praying icon="<FaRegSun />" times="5.00am" />
    </>
  );
};
export default Prayings;
