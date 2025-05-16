import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import "./searchbox.css";

export default function Searchbox({ getinfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);

  let url_weather = "https://api.openweathermap.org/data/2.5/weather";
  let url_key = "5ac91a624a475f6bf39f4a18ef52099b";

  let getwheather = async () => {
    try {
      let url = `${url_weather}?q=${city}&appid=${url_key}&units=metric`;
      let res = await fetch(url);
      let responsejson = await res.json();

      let result = {
        city: city,
        humidity: responsejson.main.humidity,
        maxtemp: responsejson.main.temp_max,
        mintemp: responsejson.main.temp_min,
        temp: responsejson.main.temp,
        tempfeels: responsejson.main.feels_like,
        weather: responsejson.weather[0].description,
      };
      
      setError(false);
      return result;
    } catch (error) {
      throw error;
    }
  };

  const onchangeinput = (event) => {
    setCity(event.target.value);
  };

  const handlebtn = async (event) => {
    try {
      event.preventDefault();
      setCity("");
      let weatherinfo = await getwheather();
      getinfo(weatherinfo);
    } catch (error) {
      setError(true);
    }
  };

  return (
    <div className="searchbox">
      <form onSubmit={handlebtn}>
        <TextField
          id="searchcity"
          label="Search city"
          required
          variant="outlined"
          value={city}
          onChange={onchangeinput}
          style={{backgroundColor: 'azure', borderRadius:'10px',width:'300px'}}
        />
        <br />
        <br />
        <Button type="submit" variant="contained">
          Search
        </Button>
        {error && <p style={{color:'red',fontSize:'20px'}}>No Such place exist!</p>}
      </form>
    </div>
  );
}
