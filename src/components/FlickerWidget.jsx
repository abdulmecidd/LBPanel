import Card from "./main_elements/Card";
import SearchInput from "./main_elements/SearchInput";
import Images from "./main_elements/Images";

const FlickerWidget = () => {
  return (
    <>
      <Card>
        <header className="p-[1rem] bg-gradient-to-t from-indigo-500 to-indigo-700 text-[white] rounded-t-md">
          <h1 className="text-4xl font-semibold">Trend Images</h1>
          <SearchInput
            placeholder="Search your interest..."
            className="pl-[0.4rem] rounded-full w-full text-gray mt-2"
          />
        </header>
        <section className="grid gap-2 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-4 p-[1rem]">
          <Images url="https://placehold.co/600x400" />
          <Images url="https://placehold.co/600x400" />
          <Images url="https://placehold.co/600x400" />
          <Images url="https://placehold.co/600x400" />
          <Images url="https://placehold.co/600x400" />
          <Images url="https://placehold.co/600x400" />
          <Images url="https://placehold.co/600x400" />
          <Images url="https://placehold.co/600x400" />
        </section>
      </Card>
    </>
  );
};

export default FlickerWidget;
