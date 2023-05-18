import Card from "./main_elements/Card";
import Topics from "./main_elements/Twitter/Topics";
import TrendTopics from "./main_elements/Twitter/TrendTopics";
import TwitterFeed from "./main_elements/Twitter/TwitterFeed";
const TwitterWidget = () => {
  return (
    <>
      <Card>
        <header className="bg-gradient-to-t from-dodger-blue-300 to-dodger-blue-400 text-[white] rounded-t-md p-[1rem]">
          <div className="flex gap-1 items-baseline">
            <h1 className="text-4xl font-semibold">#Tweets</h1>
            <p className="text-[0.8rem]">
              From{" "}
              <a className="hover:underline" href="#">
                @AmazonAWS
              </a>
            </p>
          </div>
        </header>
        <section className="flex">
          <div className="feed w-auto overflow-y-scroll max-h-96">
            <TwitterFeed />
            <TwitterFeed />
            <TwitterFeed />
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
