import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useQuery } from "react-query";
import marker from "../assests/marker.svg";
import { Icon } from "leaflet";
import RecenterPosition from "./RecenterPosition";

const MapLatyout: React.FC = () => {
  const [position, setPosition] = useState<any>({ lat: 33, lng: 65 });
  const [selectedCountry, setSelectedCountry] = useState<any>();
  const myIcon = new Icon({
    iconUrl: marker,
    iconSize: [32, 32],
  });
  const getData = async () => {
    const res = await fetch("https://disease.sh/v3/covid-19/countries");
    return res.json();
  };
  const { data, error, isLoading } = useQuery("worldData", getData);
  function handleCountryChange(e: any) {
    const { value } = e.target;

    const newPosition = data.filter((item: any) => {
      return item.country == value;
    });

    setSelectedCountry(newPosition[0]);

    setPosition({
      ...position,
      lat: newPosition[0].countryInfo.lat,
      lng: newPosition[0].countryInfo.long,
    });
  }
  useEffect(() => {
    setSelectedCountry(data && data[0]);
  }, [data]);
  if (error) return <div>Request Failed</div>;
  if (isLoading) return <div></div>;

  return (
    <div className="text-center mb-80">
      <div className="mt-8">
        <div className="font-extrabold text-4xl text-red-600 text-center py-4">
          COVID-19 cases around the globe
        </div>
        <div className="font-bold text-blue-600">Please choose a Country</div>
        <select onChange={handleCountryChange}>
          {data.map((item: any) => {
            return (
              <option
                className="w-full"
                value={item.country}
                key={item.country}
              >
                {item.country}
              </option>
            );
          })}
        </select>
      </div>
      <div className="mx-16 py-8">
        <MapContainer
          center={position}
          zoom={5}
          scrollWheelZoom={false}
          style={{
            width: "100%",
            height: "500px",
          }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position} icon={myIcon}>
            <Popup>
              <div>
                <div>
                  <span className="font-bold">Country: </span>
                  <span className="text-blue-500">
                    {selectedCountry && selectedCountry.country}
                  </span>
                </div>
                <div>
                  <span className="font-bold">Active Cases: </span>
                  <span className="text-red-500">
                    {selectedCountry && selectedCountry.active}
                  </span>
                </div>
                <div>
                  <span className="font-bold">Recoverd Cases: </span>
                  <span className="text-green-500">
                    {selectedCountry && selectedCountry.recovered}
                  </span>
                </div>
                <div>
                  <span className="font-bold">Total Deaths: </span>
                  <span className="">
                    {selectedCountry && selectedCountry.deaths}
                  </span>
                </div>
              </div>
            </Popup>
          </Marker>
          <RecenterPosition position={position} />
        </MapContainer>
      </div>
    </div>
  );
};
export default MapLatyout;
