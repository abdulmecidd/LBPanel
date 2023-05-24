import { useContext } from "react";
import { Context } from "../../Context";

const Dropdown = (props) => {
  let { userCity, updateUserCity } = useContext(Context);

  const handleDropdownChange = (e) => {
    const city = e.target.value;
    updateUserCity(city);
  };
  return (
    <>
      <select
        onChange={handleDropdownChange}
        className="rounded-xl mt-1 text-aquamarine-blue-900 bg-aquamarine-blue-50 h-auto w-auto font-main"
      >
        <option value="default">{userCity}</option>
        {props.children}
      </select>
    </>
  );
};
export default Dropdown;
