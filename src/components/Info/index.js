import React, { useState, useEffect } from 'react';
import getWeather from '../../services/Weather';
import './index.css';

const Info = () => {
  const getTime = () => {
    const hour = ('0' + new Date().getHours()).slice(-2);
    const minutes = ('0' + new Date().getMinutes()).slice(-2);
    return `${hour}:${minutes}`;
  };
  const [time, setTime] = useState(() => getTime());
  const [error, setError] = useState(false);
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    const city = user ? user.location.split(' ')[0] : '';
    getWeather(city)
      .then((res) => setWeather(res))
      .catch((err) => setError(true));
  }, []);
  setTimeout(() => {
    setTime(getTime());
  }, 60000);

  return (
    <div className="Info">
      <div className="Clock">{time}</div>
      {weather && (
        <div className="Weather">
          {weather && weather.weather && (
            <>
              <h2 className="City">{weather.name}</h2>
              <div>
                <img
                  src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
                  alt={weather.weather[0].description}
                />
                <span>{weather.main.temp}°C</span>
              </div>
            </>
          )}
        </div>
      )}
      {error && <alert>Error!</alert>}
    </div>
  );
};
export default Info;
