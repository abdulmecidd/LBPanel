import { FiTwitter } from "react-icons/fi";

const Topics = ({ name, url, tweetVolume }) => {
  return (
    <>
      <div className="flex items-center p-[0.5rem] gap-4">
        <button className="font-semibold hover:underline hover:underline-offset-auto">
          {name}
        </button>
        <div className="flex ml-auto items-center gap-2 text-gray">
          <FiTwitter />
          <p className="ml-auto text-gray">{tweetVolume}</p>
        </div>
      </div>
    </>
  );
};

export default Topics;
