 import axios from 'axios';

const API_KEY = '9fdf147d708e5cc32967f29dd3bf3597';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

// ACTION TYPES
export const FETCH_WEATHER = 'FETCH_WEATHER';

// ACTIONS CREATORS
export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);``

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}