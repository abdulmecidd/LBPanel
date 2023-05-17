const Card = (props) => {
  return (
    <>
      <div className="h-auto w-auto sm:flex-col md-flex-row xl:flex-row bg-[#ffff] font-main rounded-md">
        {props.children}
      </div>
    </>
  );
};

export default Card;
