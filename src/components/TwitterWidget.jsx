import { useEffect, useState } from "react";
import Card from "./main_elements/Card";
import TrendTopics from "./main_elements/Twitter/TrendTopics";
import TwitterFeed from "./main_elements/Twitter/TwitterFeed";
import axios from "axios";
import { TWITTER_API_KEY } from "../api";

const TwitterWidget = () => {
  const [name, setName] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchTweets = async () => {
      try {
        const response = await axios.get(
          "https://twitter154.p.rapidapi.com/user/tweets",
          {
            method: "GET",
            params: {
              username: "awscloud",
              limit: "10",
              include_replies: "false",
              include_pinned: "false",
            },
            headers: {
              "X-RapidAPI-Key": TWITTER_API_KEY,
              "X-RapidAPI-Host": "twitter154.p.rapidapi.com",
            },
          }
        );
        setData(response.data.results);
        setName(data[0].user.username);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTweets();
  }, []);

  return (
    <>
      <Card className="max-w-[40rem]">
        <header className="bg-gradient-to-t from-dodger-blue-300 to-dodger-blue-400 text-[white] rounded-t-md p-[1rem]">
          <div className="flex gap-1 items-baseline">
            <h1 className="text-4xl font-semibold">#Tweets</h1>
          </div>
        </header>
        <section className="xl:flex md:flex ">
          <div className="feed w-auto overflow-y-scroll max-h-96">
            {data.map((e, i) => {
              return (
                <TwitterFeed
                  key={i}
                  name={e.user.username}
                  screen_name={e.user.name}
                  content={e.text}
                  profileImg={e.user.profile_pic_url}
                  image_url={e.media_url}
                />
              );
            })}
          </div>
          <div className="topics">
            <TrendTopics />
          </div>
        </section>
      </Card>
    </>
  );
};

export default TwitterWidget;
