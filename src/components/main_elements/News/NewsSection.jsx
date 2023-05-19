import { FiChevronRight } from "react-icons/fi";

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
            src="https://placehold.co/600x400"
          ></img>
        </div>
        <div className="">
          <h1 className="font-bold">{title}</h1>
          <p className="text-[1rem] font-extralight">{description}</p>
        </div>
        <FiChevronRight className="text-6xl text-red-400" />
      </div>
    </>
  );
};
export default NewsSection;
