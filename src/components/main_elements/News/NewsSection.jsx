const NewsSection = ({
  title,
  description,
  author,
  img,
  url,
  urlToImage,
  publishedAt,
}) => {
  return (
    <>
      <div className="flex p-[1rem] gap-4 items-center">
        <div className="">
          <img
            className="h-12 w-12 rounded-md"
            src={urlToImage ? `${urlToImage}` : "https://placehold.co/600x400"}
          ></img>
        </div>
        <div className="">
          <a target="_blank" href={url} className="font-bold hover:underline">
            {title && title.slice(0, 50)}...
          </a>
          <p className="text-[1rem] font-extralight">
            {description && description.slice(0, 40)}...
          </p>
        </div>
      </div>
    </>
  );
};
export default NewsSection;
