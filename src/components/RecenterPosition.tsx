import { useMap } from "react-leaflet";
import { useEffect } from "react";

interface IPROPS {
  position: any;
}

const RecenterPosition: React.FC<IPROPS> = ({ position }) => {
  const map = useMap();
  useEffect(() => {
    map.setView(position);
  }, [position]);
  return null;
};
export default RecenterPosition;
