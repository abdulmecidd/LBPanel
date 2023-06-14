const TwitterFeed = ({
  name,
  screen_name,
  url,
  profileImg,
  createdAt,
  content,
  image_url,
}) => {
  return (
    <>
      <div className="p-[1rem] m-4 pb-xl">
        <div className="flex items-center gap-2">
          <div className="">
            <img
              className="rounded-full w-12 sm:w-6"
              src={profileImg ? `${profileImg}` : `https://i.pravatar.cc/300`}
            ></img>
          </div>
          <div className="flex items-baseline gap-1">
            <a
              className="sm:text-[0.8rem] font-semibold hover:underline cursor-pointer"
              href={`https://twitter.com/${name}`}
              target="_blank"
            >
              {screen_name}
            </a>
            <p className="text-[0.8rem] text-gray">
              <a href={url} target="_blank">
                @{name}
              </a>
            </p>
          </div>
        </div>
        <div className="h-auto xl:w-80 md:w-80">
          <p className="break-all w-64">{content}</p>
          {image_url !== null ? (
            <img
              className="rounded-md h-auto w-auto mt-2"
              src={image_url}
            ></img>
          ) : null}
        </div>
      </div>
    </>
  );
};
export default TwitterFeed;
