import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import "./infobox.css";

export default function Infobox({ info }) {
  let weatherurl = 'https://img.freepik.com/premium-photo/bright-sunny-day-with-clear-blue-sky-fluffy-white-clouds-green-field-bright-sunny-day-with-clear-blue-sky_538213-103709.jpg?w=360';
  let tem = info.temp;
  let logo='';

  let summer =
    "https://img.freepik.com/premium-photo/bright-sunny-day-with-clear-blue-sky-fluffy-white-clouds-green-field-bright-sunny-day-with-clear-blue-sky_538213-103709.jpg?w=360";
    
    

  let winter =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzs0FYXsSIwE1e1fGNDlvDpOpTv9f38xK-xQ&s";

    

  let rainy =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZwFl7WZR9PfCVbO3n9quGrnwq_z2VDkCCrA&s";

    

  if (tem > 35) {
    weatherurl = summer;
    logo=<WbSunnyIcon></WbSunnyIcon>;
    
  } else if (tem <= 35 && tem > 20) {
    weatherurl = rainy;
    logo= <ThunderstormIcon></ThunderstormIcon>;
  } else {
    weatherurl = winter;
    logo=<AcUnitIcon></AcUnitIcon>;
  }

  return (
    <div className="infobox">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia sx={{ height: 140 }} image={weatherurl} />

        <CardContent>
          <Typography gutterBottom variant="h5" component="div" >
            <b>{info.city}</b> &nbsp; &nbsp;{logo}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "text.secondary" }}
          ></Typography>
          <div>Temperatue = {info.temp} &deg;C </div>
          <div>Max Temp = {info.maxtemp} &deg;C</div>
          <div>Min Temp = {info.mintemp} &deg;C</div>
          <div>Humidity = {info.humidity}%</div>
          <div>
            The weather can be described{" "}
            <b>
              <i>{info.weather}</i>
            </b>{" "}
            and feels like {info.tempfeels} &deg;C.
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
