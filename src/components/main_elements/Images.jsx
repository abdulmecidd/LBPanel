const Images = ({ img, url, className }) => {
  return (
    <>
      <img src={url} className={`rounded-xl ${className}`}></img>
    </>
  );
};
export default Images;
