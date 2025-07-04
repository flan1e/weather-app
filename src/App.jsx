import React, {useState} from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/weatherCard";
import "./App.css"

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const API_URL = 'https://api.weatherapi.com/v1/current.json';

function App()
{
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState('');

    const fetchWeather = async (city) => {
        if (!city.trim()) {
        setError('Введите название города');
        return;
    }

    try {
        const url = `${API_URL}?q=${city}&key=${API_KEY}`;
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Ошибка сети: ${response.status}`);
        }
        const data = await response.json();
        setWeatherData(data);
        setError('');
    } catch (err) {
    console.error(err);
    setError('Не удалось загрузить данные о погоде');
    setWeatherData(null);
  }
};
    return (
        <div className="search_box">
            <h1>Погода в реальном времени</h1>
            <SearchBar onSearch={fetchWeather} />
            {error && <p>{error}</p>}
            <WeatherCard data={weatherData} />
        </div>
    );
}
export default App;