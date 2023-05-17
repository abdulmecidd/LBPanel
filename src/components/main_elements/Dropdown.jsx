const Dropdown = (props) => {
  return (
    <>
      <select className="rounded-xl text-aquamarine-blue-900 bg-aquamarine-blue-50 h-auto w-auto">
        {props.children}
      </select>
    </>
  );
};
export default Dropdown;
