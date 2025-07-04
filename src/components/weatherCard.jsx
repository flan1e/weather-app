import React from 'react';
import './styles/WeatherCard.css';

function WeatherCard({ data }) {
  if (!data || !data.current || !data.location) {
    return null;
  }

  const location = data.location;
  const current = data.current;

  const condition = current.condition || {};

  return (
    <div className="weather-card">
      <h2>{location.name}, {location.region}</h2>
      <p>{location.country}</p>

      {condition.icon && (
        <img
          src={`https:${condition.icon}`}
          alt={condition.text || 'Погода'}
          className="condition-icon"
        />
      )}

      <p>{current.temp_c}°C</p>
      <p>{condition.text || 'Нет данных'}</p>
      <p>Ветер: {current.wind_kph} км/ч</p>
    </div>
  );
}
export default WeatherCard;