import BistIndices from "./main_elements/Bist/BistIndices";
import Button from "./main_elements/Button";
import Card from "./main_elements/Card";

const BorsaIstanbul = () => {
  return (
    <>
      <Card>
        <header className="p-[1rem] bg-gradient-to-t from-teal-400 rounded-t-xl to-teal-600">
          <h1 className="text-4xl font-semibold text-[white]">BIST</h1>
        </header>
        <section>
          <BistIndices
            code="ISCTR"
            longName="TÜRKİYE İŞ BANKASI"
            value="11.33"
            rise="-9.94%"
          />{" "}
          <BistIndices
            code="ISCTR"
            longName="TÜRKİYE İŞ BANKASI"
            value="11.33"
            rise="-9.94%"
          />{" "}
          <BistIndices
            code="ISCTR"
            longName="TÜRKİYE İŞ BANKASI"
            value="11.33"
            rise="-9.94%"
          />
        </section>
      </Card>
    </>
  );
};

export default BorsaIstanbul;
