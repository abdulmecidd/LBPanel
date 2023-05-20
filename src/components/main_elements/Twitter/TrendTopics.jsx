import Topics from "./Topics";

const TrendTopics = () => {
  return (
    <>
      <div className="m-4">
        <h1 className="p-[0.5rem] font-semibold">Trend Topics</h1>

        <Topics name="Games" tweetVolume="12312" />
        <Topics name="#MakeUp" tweetVolume="56515" />
        <Topics name="#Election" tweetVolume="200" />
        <Topics name="Minecraft" tweetVolume="12312" />
      </div>
    </>
  );
};

export default TrendTopics;
