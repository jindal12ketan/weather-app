import React, { useEffect, useState } from 'react';
import { fetchWeatherData, fetchFiveDayForecast } from '../services/weatherApi';
import CityName from '../components/CityName';
import Temperature from '../components/Temperature';
import WeatherCondition from '../components/WeatherCondition';
import ForecastCard from '../components/ForecastCard';
import CitySearch from '../components/CitySearch';
import WeatherIcon from '../components/WeatherIcon';

const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState([]);
  const [city, setCity] = useState('New York');
  const [unit, setUnit] = useState('metric');
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchWeather(city);
  }, [city]);

  const fetchWeather = async (city) => {
    try {
      setError(null);
      const data = await fetchWeatherData(city);
      setWeatherData(data);
      fetchForecast(city);
    } catch (error) {
      alert('City not found. Please try again.');
    }
  };

  const fetchForecast = async (city) => {
    try {
      const data = await fetchFiveDayForecast(city);
      setForecastData(data.list);
    } catch (error) {
      setError('Unable to fetch forecast data.');
    }
  };

  const handleSearch = (city) => {
    setCity(city);
  };

  const toggleUnit = () => {
    setUnit((prevUnit) => (prevUnit === 'metric' ? 'imperial' : 'metric'));
  };

  return (
    <div className="weather-app">
      <CitySearch onSearch={handleSearch} />

      {error && <p className="error-message">{error}</p>}

      {weatherData && (
        <div>
          <CityName name={weatherData.name} />
          <Temperature temp={weatherData.main.temp} unit={unit} />
          <WeatherCondition condition={weatherData.weather[0].main} />
          <WeatherIcon iconCode={weatherData.weather[0].icon} altText={weatherData.weather[0].description} />
          <div className="toggle-switch">
            <input
              type="checkbox"
              id="unit-switch"
              className="toggle-input"
              checked={unit === 'imperial'}
              onChange={toggleUnit}
            />
            <label htmlFor="unit-switch" className="toggle-label">
              <span className="left">Fahrenheit</span>
              <span className="right">Celsius</span>
            </label>
          </div>

        </div>
      )}

      <div className="forecast">
        {forecastData.slice(0, 5).map((forecast, index) => (
          <ForecastCard
            key={index}
            day={new Date(forecast.dt * 1000).toLocaleDateString('en-US', {
              weekday: 'long',
            })}
            tempMax={forecast.main.temp_max}
            tempMin={forecast.main.temp_min}
            icon={forecast.weather[0].icon}
            unit={unit}
          />
        ))}
      </div>
    </div>
  );
};

export default WeatherApp;
