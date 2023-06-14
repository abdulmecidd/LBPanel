const Card = (props) => {
  return (
    <>
      <div
        className={`h-auto w-auto sm:flex-row md-flex-row xl:flex-row bg-[#ffff] font-main rounded-md  ${props.className}`}
      >
        {props.children}
      </div>
    </>
  );
};

export default Card;
