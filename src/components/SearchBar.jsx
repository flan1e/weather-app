import React, { useState } from "react";
import './styles/SearchBar.css';


function SearchBar({ onSearch })
{
    const [city, setCity] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(city.trim())
        {
            onSearch(city);
        }
    };
    
    return (
        <form onSubmit={handleSubmit} className = "SearchBar-form">
            <input 
                type = "text"
                placeholder="Введите город"
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />
            <button type="submit">Найти</button>
        </form>
    );
}
export default SearchBar;