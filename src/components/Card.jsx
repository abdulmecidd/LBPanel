function Card(props) {
  return (
    <>
      <div className="bg-jungle-mist-50 shadow-sm content-start m-auto rounded-md h-auto">
        {props.children}
      </div>
    </>
  );
}

export default Card;
