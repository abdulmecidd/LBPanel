const TwitterFeed = ({ name, screen_name, url, profileImg, createdAt }) => {
  return (
    <>
      <div className="p-[1rem]">
        <div className="flex items-center gap-2">
          <div className="">
            <img
              className="rounded-full w-12 sm:w-6"
              src="https://i.pravatar.cc/300"
            ></img>
          </div>
          <div className="flex items-baseline gap-1">
            <h1 className="sm:text-[0.8rem] font-semibold">Amazon AWS</h1>
            <p className="text-[0.8rem] text-gray">@amazonaws</p>
          </div>
        </div>
        <div className="h-auto">
          <p className="break-all">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a lacinia mi, in accumsan ipsum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus
          </p>
          <p className="text-[0.6rem] text-gray">02.10.2022</p>
        </div>
      </div>
    </>
  );
};
export default TwitterFeed;
