import Card from "./main_elements/Card";
import Currency from "./main_elements/Currencies/Currency";

const Currencies = () => {
  return (
    <>
      <Card>
        <header className="rounded-t-xl bg-gradient-to-t from-blue to-dodger-blue-600 h-auto p-[1rem]">
          <h1 className="mb-2 font-medium text-4xl text-[white]">Currencies</h1>
          <input
            type="number"
            className="rounded-xl pl-[1rem] font-medium text-gray"
            placeholder="$1"
          />
        </header>
        <section className="p-[2rem]">
          <Currency currency="EUR" value="0" />
          <Currency currency="USD" value="0" />
          <Currency currency="TRY" value="0" />
        </section>
      </Card>
    </>
  );
};

export default Currencies;
