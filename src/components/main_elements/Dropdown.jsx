import { useContext } from "react";
import { Context } from "../../Context";

const Dropdown = (props) => {
  const { userCity } = useContext(Context);
  return (
    <>
      <select className="rounded-xl mt-1 text-aquamarine-blue-900 bg-aquamarine-blue-50 h-auto w-auto font-main">
        <option value="default">{userCity}</option>
        {props.children}
      </select>
    </>
  );
};
export default Dropdown;
