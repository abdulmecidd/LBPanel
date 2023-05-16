const Card = (props) => {
  return (
    <>
      <div className="grid-cols-4 sm:grid-cols-1 md:grid-cols-2 h-auto w-auto">
        {props.children}
      </div>
    </>
  );
};

export default Card;
