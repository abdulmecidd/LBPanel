import { useEffect, useState, useRef } from "react";
import axios from "axios";
import Card from "./main_elements/Card";
import SearchInput from "./main_elements/SearchInput";
import NewsSection from "./main_elements/News/NewsSection";
import { Context } from "../Context";
import { useContext } from "react";
import { MdHistory } from "react-icons/md";
import { NEWS_DATA_API } from "../api";

const News = () => {
  const { userCountry, flag } = useContext(Context);
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState(null);
  const [loading, setLoading] = useState(true);
  const [date, setDate] = useState(null);
  const containerRef = useRef(null);

  const interval = setInterval(() => {
    const currentDate = new Date();
    setDate(currentDate.getHours() + ":" + currentDate.getMinutes());
    fetchData();
  }, 5 * 60 * 1000);

  useEffect(() => {
    fetchData();

    return () => {
      clearInterval(interval);
    };
  }, [userCountry]);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=${flag}&page=${page}&pageSize=${4}&apiKey=${NEWS_DATA_API}`
      );
      const data = response.data.articles;

      if (page === 1) {
        setNews(data);
      } else {
        setNews((prevNews) => [...data, ...prevNews]);
      }

      setPage((prevPage) => prevPage + 1);
      const currentDate = new Date();
      setDate(currentDate.getHours() + ":" + currentDate.getMinutes());
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const filteredNews = news.filter((e) => {
    if (!searchTerm) {
      return true;
    } else {
      const lowerCaseTitle = e.title.toLowerCase();
      const lowerCaseSearchTerm = searchTerm.toLowerCase();
      return lowerCaseTitle.includes(lowerCaseSearchTerm);
    }
  });

  const handleScroll = () => {
    const container = containerRef.current;

    if (
      container.scrollTop === 0 &&
      page > 1 &&
      !loading &&
      filteredNews.length > 0
    ) {
      setPage((prevPage) => prevPage - 1);
    } else if (
      container.scrollTop + container.clientHeight >= container.scrollHeight &&
      !loading
    ) {
      fetchData();
    }
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
  };

  return (
    <>
      <Card>
        <header className="text-[white] rounded-t-md p-[1rem] bg-gradient-to-t from-red-300 to-red-400 min-w-128">
          <div className="flex items-end gap-1">
            <h1 className="text-4xl font-semibold">News</h1>
            <p className="text-[0.8rem]">from {userCountry}</p>
            <div className="flex ml-auto text-[0.8rem] items-center mr-8 text-[white]">
              <MdHistory /> <p>{date && date.toLocaleString()}</p>
            </div>
          </div>

          <SearchInput
            type="text"
            className="rounded-md p-[0.1rem] pl-[0.2rem] w-full text-[0.8rem] text-gray-dark font-semibold"
            placeholder="Search..."
            onChange={handleSearch}
          />
        </header>
        <section
          className="overflow-y-auto max-h-64 min-w-[36rem]"
          onScroll={handleScroll}
          ref={containerRef}
        >
          {filteredNews.length === 0 ? (
            <div className="text-md font-semibold font-main text-center ">
              "{searchTerm}" couldn't be found.
            </div>
          ) : (
            filteredNews.map((e, index) => (
              <NewsSection
                key={index}
                title={e.title}
                description={e.description}
                publishedAt={e.publishedAt}
                urlToImage={e.urlToImage}
                url={e.url}
              />
            ))
          )}
        </section>
      </Card>
    </>
  );
};

export default News;
