import { useEffect, useState } from "react";
import Card from "./main_elements/Card";
import { MdHistory } from "react-icons/md";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import axios from "axios";
import { BIST_API } from "../api";

const BorsaIstanbul = () => {
  const [values, setValues] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.collectapi.com/economy/borsaIstanbul",
          {
            headers: {
              "content-type": "application/json",
              authorization: BIST_API,
            },
          }
        );
        setValues(response.data.result[0]);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  const data = [
    { name: "Highest", value: values.max },
    { name: "Lowest", value: values.min },
    { name: "Opening", value: values.opening },
    { name: "Closing", value: values.closing },
  ];

  setInterval(() => {
    const currentDate = new Date();
    setDate(currentDate.getHours() + ":" + currentDate.getMinutes());
    fetchData();
  }, 5 * 60 * 1000);

  return (
    <>
      <Card className="md:w-1/3 xl:w-1/3">
        <header className="p-[1rem] bg-gradient-to-t justify-between flex items-center from-teal-400 rounded-t-xl to-teal-600">
          <h1 className="text-4xl font-semibold text-[white]">BIST</h1>
          <div className="flex items-center mr-8 text-[white]">
            <MdHistory /> <p>{values.time}</p>
          </div>
        </header>
        <section>
          <ResponsiveContainer
            width={"100%"}
            height={300}
            top="50%"
            bottom="50%"
          >
            <BarChart
              data={data}
              margin={{
                top: 16,
                right: 48,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#0d9488" />
            </BarChart>
          </ResponsiveContainer>
        </section>
      </Card>
    </>
  );
};

export default BorsaIstanbul;
