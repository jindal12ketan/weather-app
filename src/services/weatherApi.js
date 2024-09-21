const API_KEY = 'f23fa35d3af6a63957fa1456afd9d137';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const fetchWeatherData = async (city) => {
  const response = await fetch(`${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`);
  if (!response.ok) throw new Error('City not found');
  return response.json();
};

export const fetchFiveDayForecast = async (city) => {
  const response = await fetch(`${BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric`);
  if (!response.ok) throw new Error('City not found');
  return response.json();
};
