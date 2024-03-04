import { useState } from "react";
import clear from "./images/clear.jpeg"
import rain from  "./images/rain.jpg"
import clouds from  "./images/clouds.jpeg"
import mist from "./images/mist.png"


const Info = () => {
  const [data, setData] = useState("");
  const [input, setInput] = useState("london");
  const [inpVal, setInpVal] = useState(null);

  const weather = {
    Clouds: clouds,
    Clear: clear,
    Rain: rain,
    Mist: mist,
  };

  return (
    <div>
      (
        <div className="info">
          <h2 className="info-subtitle">
            {data.name} weather: {data.weather[0].main}
          </h2>
          <img
            width="234px"
            height="150px"
            className="info-img"
            src={weather[data.weather[0].main]}
            alt=""
          ></img>
          <span className="info-span">
            Description: {data.weather[0].description}
          </span>
          <span className="info-span">Temperature: {data.main.temp}°C</span>
          <span className="info-span">
            Max temperature: {data.main.temp_max}°C
          </span>
          <span className="info-span">
            Min temperature: {data.main.temp_min}°C
          </span>
          <span className="info-span">Humidity: {data.main.humidity}%</span>
          <span className="info-span">Wind speed: {data.wind.speed}mph</span>
        </div>
      )
    </div>
  );
};

export default Info;
