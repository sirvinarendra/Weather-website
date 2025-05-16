import Searchbox from "./searchbox";
import Infobox from "./Infobox";
import { useState } from "react";

export default function Weatherapp() {
  let [weatherinfo, setWeatherinfo] = useState({
    city: "Delhi",
    humidity: "34",
    maxtemp: "45",
    mintemp: "12",
    temp: "28",
    tempfeels: "31",
    weather: "haze",
  });

  let getinfo = (info) => {
    setWeatherinfo(info);
    console.log(info);
  };

  return (
    <div className="webpage">
      <h1 style={{ textAlign: "center",backgroundColor:'lightpink',
        padding:'10px 20px',
        borderRadius:'10px',marginTop:'10px',
        fontWeight:'900'
       }}>Weather Information </h1>
      <Searchbox getinfo={getinfo} />
      <Infobox info={weatherinfo} />
    </div>
  );
}
