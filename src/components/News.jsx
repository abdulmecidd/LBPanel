import Card from "./main_elements/Card";
import SearchInput from "./main_elements/SearchInput";
import NewsSection from "./main_elements/News/NewsSection";
import Dropdown from "./main_elements/Dropdown";
const News = () => {
  return (
    <>
      <Card>
        <header className="text-[white] rounded-t-md p-[1rem] bg-gradient-to-t from-red-300 to-red-400">
          <div className="flex items-end gap-1">
            <h1 className="text-4xl font-semibold">News</h1>
            <p className="text-[0.8rem]">from Turkey</p>
          </div>

          <SearchInput
            type="text"
            className="rounded-md p-[0.1rem] pl-[0.2rem] w-full text-[0.8rem] text-gray-dark font-semibold"
            placeholder="Search..."
          />
        </header>
        <section className="overflow-y-auto max-h-64">
          <NewsSection
            title="Lorem Ipsum"
            description="A federal judge ruled Wednesday that the U.S. The …"
            publishedAt="2023-05-17"
            author="cnbc.com"
          />
          <NewsSection
            title="Lorem Ipsum"
            description="A federal judge ruled Wednesday that the U.S. The …"
            publishedAt="2023-05-17"
            author="cnbc.com"
          />
          <NewsSection
            title="Lorem Ipsum"
            description="A federal judge ruled Wednesday that the U.S. The …"
            publishedAt="2023-05-17"
            author="cnbc.com"
          />
        </section>
      </Card>
    </>
  );
};

export default News;
