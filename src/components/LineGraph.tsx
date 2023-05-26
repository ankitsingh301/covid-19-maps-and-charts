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
  const getData = async () => {
    const res = await fetch("https://disease.sh/v3/covid-19/countries");
    return res.json();
  };

  const { data, error, isLoading } = useQuery("worldData", getData);
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
        COVID-19 cases around the globe
      </div>
      <div className="mx-4">
        <ResponsiveContainer width="100%" aspect={3}>
          <LineChart data={data}>
            <CartesianGrid />
            <XAxis
              dataKey="country"
              interval={"preserveStartEnd"}
              stroke="brown"
            />
            <YAxis></YAxis>
            <Legend />
            <Tooltip />
            <Line dataKey="active" stroke="red" />
            <Line dataKey="deaths" stroke="black" />
            <Line dataKey="recovered" stroke="green" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
export default LineGraph;
