import React, { useState } from 'react';
import axios from 'axios';


function App() {

  const url = `https://api.openweathermap.org/data/2.5/weather?q=seattle&appid={API_KEY}`

  return (
    <div className="app">
      <div className="app__container">
        <div className="app_containerTop">
          <div className="app_containerLocation">
            <p>Seattle</p>
          </div>
        </div>
        <div className="app_containerBottom"></div>
      </div>
    </div>
  );
}

export default App;
