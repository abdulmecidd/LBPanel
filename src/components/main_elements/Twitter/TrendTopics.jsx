import { useEffect, useState } from "react";
import Topics from "./Topics";
import axios from "axios";
import { TWITTER_API_KEY } from "../../../api";

const TrendTopics = () => {
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    fetchTrends();
  }, []);

  const fetchTrends = async () => {
    try {
      const response = await axios.get(
        "https://twitter154.p.rapidapi.com/trends/",
        {
          headers: {
            "X-RapidAPI-Key": TWITTER_API_KEY,
            "X-RapidAPI-Host": "twitter154.p.rapidapi.com",
          },
          params: { woeid: "2344116" },
        }
      );
      setTrends(response.data[0].trends);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="m-4 max-h-96 overflow-y-auto">
        <h1 className="p-[0.5rem] font-semibold">Trend Topics</h1>

        {trends &&
          trends.map((e, key) => {
            return (
              <Topics
                key={key}
                name={e.name}
                tweetVolume={e.tweet_volume ? e.tweet_volume : "-"}
                url={e.url}
              />
            );
          })}
      </div>
    </>
  );
};

export default TrendTopics;
