import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import {
  LineChart,
  ResponsiveContainer,
  Legend,
  Tooltip,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

const LineGraph: React.FC = () => {
  const [graphData, setGraphData] = useState<any>();
  const getData = async () => {
    const res = await fetch(
      "https://disease.sh/v3/covid-19/historical/all?lastdays=all"
    );
    return res.json();
  };

  const { data, error, isLoading } = useQuery("dateData", getData);
  function createNewData() {
    const newCaseData: any = [];
    const newDeathData: any = [];
    const newRecoveredData: any = [];
    const newData: any = [];
    if (data) {
      for (const keys in data.cases) {
        newCaseData.push({ date: keys, cases: data.cases[keys] });
      }
      for (const keys in data.deaths) {
        newDeathData.push({ date: keys, deaths: data.deaths[keys] });
      }
      for (const keys in data.recovered) {
        newRecoveredData.push({ date: keys, recovered: data.recovered[keys] });
      }
    }
    if (
      newCaseData.length > 0 &&
      newDeathData.length > 0 &&
      newRecoveredData.length > 0
    ) {
      for (const i in newCaseData) {
        newData.push({
          date: newCaseData[i].date,
          cases: newCaseData[i].cases,
        });
        for (const j in newDeathData) {
          if (newCaseData[i].date === newDeathData[j].date) {
            newData[i] = { ...newData[i], deaths: newDeathData[j].deaths };
          }
        }
        for (const k in newRecoveredData) {
          if (newCaseData[i].date === newRecoveredData[k].date) {
            newData[i] = {
              ...newData[i],
              recovered: newRecoveredData[k].recovered,
            };
          }
        }
      }
    }
    if (newData.length > 0) {
      setGraphData(newData);
    }
  }
  useEffect(() => {
    createNewData();
  }, [data]);
  if (error) return <div>Request Failed</div>;
  if (isLoading)
    return (
      <div
        className="text-center text-blue-500 font-bold font text-2xl"
        style={{ height: "100vh" }}
      >
        Loading...
      </div>
    );
  return (
    <div className="container mx-auto">
      <div className="font-extrabold text-4xl text-red-600 text-center py-4">
        Fluctuation in Covid-19 cases in past years
      </div>
      <div className="mx-4">
        <ResponsiveContainer width="100%" aspect={3}>
          <LineChart data={graphData}>
            <CartesianGrid />
            <XAxis
              dataKey="date"
              interval={"preserveStartEnd"}
              stroke="brown"
            />
            <YAxis></YAxis>
            <Legend />
            <Tooltip />
            <Line dataKey="cases" stroke="red" />
            <Line dataKey="deaths" stroke="black" />
            <Line dataKey="recovered" stroke="green" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
export default LineGraph;
