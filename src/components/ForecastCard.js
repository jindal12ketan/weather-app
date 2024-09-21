import React from 'react';
import WeatherIcon from './WeatherIcon';

const ForecastCard = ({ day, tempMax, tempMin, icon, unit }) => {
  return (
    <div className="forecast-card">
      <h3>{day}</h3>
      <WeatherIcon iconCode={icon} altText="weather icon" />
      <p>Max: {tempMax}°{unit === 'metric' ? 'C' : 'F'}</p>
      <p>Min: {tempMin}°{unit === 'metric' ? 'C' : 'F'}</p>
    </div>
  );
};

export default ForecastCard;
