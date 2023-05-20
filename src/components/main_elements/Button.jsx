const Button = (props) => {
  const isEnabled = props.enabled ? "font-bold bg-teal-100 rounded-md" : "";
  return (
    <>
      <button
        className={`buttons ${isEnabled} hover:bg-teal-100 hover:w-auto p-[0.5rem] hover:h-auto hover:rounded-md hover:text-[black]`}
      >
        {props.text}
      </button>
    </>
  );
};
export default Button;
