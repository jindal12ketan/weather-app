import React from 'react';

const WeatherIcon = ({ iconCode, altText }) => {
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

  return (
    <img
      src={iconUrl}
      alt={altText}
      style={{ width: '100px', height: '100px' }}
    />
  );
};

export default WeatherIcon;
