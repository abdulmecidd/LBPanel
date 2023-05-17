const Card = (props) => {
  return (
    <>
      <div className="h-auto w-auto bg-[#ffff] font-main rounded-md">
        {props.children}
      </div>
    </>
  );
};

export default Card;
