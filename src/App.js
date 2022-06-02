import React, { useState } from 'react';
import axios from 'axios';


function App() {
  const [ data, setData ] = useState({});
  const [ location, setLocation ] = useState('');
  const API_KEY = process.env.WEATHER_API_KEY;

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=bd8ce47b602572508e5b4bac2f9ade6d`;


  const searchLocation = (e) => {
    if (e.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log("response data >>>>>>>", response.data);
      })
      setLocation('');
    }
  }


  return (
    <div className="app">

      <div className="app__search">
        <input
          type="text"
          value={location}
          onChange={e => setLocation(e.target.value)}
          onKeyPress={searchLocation}
          placeholder="Enter location..."
        />
      </div>

      <div className="app__container">

        <div className="app_top">
          <div className="app__topLocation">
            <p>{data.name}</p>
          </div>
          <div className="app__topTemp">
            {data.main ? <h1>{data.main.temp}° F</h1> : null}
          </div>
          <div className="app__topDescription">
            {data.weather ? <p>{data.weather[ 0 ].main}</p> : null}
          </div>
        </div>

        {data.main != undefined &&
          <div className="app__bottom">
            <div className="app__bottomFeels">
              {data.main ? <p className="bold">{data.main.feels_like}° F</p> : null}
              <p>Feels Like</p>
            </div>
            <div className="app__bottomHumidity">
              {data.main ? <p className="bold">{data.main.humidity}%</p> : null}
              <p>Humidity</p>
            </div>
            <div className="app__bottomWind">
              {data.wind ? <p className="bold">{data.wind.speed}MPH</p> : null}
              <p>Wind Speed</p>
            </div>
          </div>
        }
        
      </div>
    </div>
  );
}

export default App;
