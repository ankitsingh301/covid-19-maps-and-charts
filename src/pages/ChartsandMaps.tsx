import LineGraph from "../components/LineGraph";
import MapLayout from "../components/MapLatyout";

const ChartsandMaps: React.FC = () => {
  return (
    <div className="bg-cyan-100">
      <div className="border-2 w-24 text-center p-2 bg-blue-600 text-white">
        <a href="/">Home</a>
      </div>
      <LineGraph />
      <MapLayout />
    </div>
  );
};
export default ChartsandMaps;
