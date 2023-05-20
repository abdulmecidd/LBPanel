const Dropdown = (props) => {
  return (
    <>
      <select className="rounded-xl mt-1 text-aquamarine-blue-900 bg-aquamarine-blue-50 h-auto w-auto font-main">
        <option className=""> {props.children}</option>
      </select>
    </>
  );
};
export default Dropdown;
