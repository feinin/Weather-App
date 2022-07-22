import React, { useState } from 'react';
import './App.css';
import Date from './components/Date';
import Search from './components/Search';
import Location from './components/Location';
import Weather from './components/Weather';
import { fetchWeather } from './components/Search2'

const App = () => {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = async (e) => {
    if(e.key === 'Enter') {
      const data = await fetchWeather(query);
      setWeather(data);
      setQuery('');
    }
  }

  return (
    <div className="app">
      <Search
      />
      <Location
      />
      <Date
      />
      <Weather
      />
    </div>
  );
}

export default App;
