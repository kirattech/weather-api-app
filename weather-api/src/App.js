import logo from './logo.svg';
import './App.css';
import SearchBar from './searchBar.js';
import { useEffect, useState } from 'react';
import { Images } from './imports.js';
import TemperatureCard from './temperatureCard.js';

const apikey = process.env.REACT_APP_API_KEY;

function App() {
  const [response, setResponse] = useState([]);
  const [input, setInput] = useState('');
  const [showResults, setShowResults] = useState(false);

  async function fetchLocation() {
    try {
      const response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${input}&count=1&language=en&format=json`);
      const data = await response.json();
      const latitude = data.results[0].latitude;
      const longitude = data.results[0].longitude;
      return [latitude, longitude];
    } catch(error) {
      alert('No location detected for input!');
      console.error(error);
    }
  }

  async function fetchWeather() {
    const location = await fetchLocation();
    console.log(location);
    console.log(apikey);

    try {
      const response = await fetch(`https://api.tomorrow.io/v4/weather/forecast?location=${location[0]},${location[1]}&apikey=${apikey}`);

      const data = await response.json();
      setResponse(data.timelines.daily)
      setShowResults(true);
    } catch(error) {
      alert('No weather entry for location!')
      console.error(error);
    }
  }

  return (
    <div className="App">
      <h1> <code> Kirat's weather app </code> </h1>
      <p> Enter a city. </p>
      <SearchBar setInput={setInput} />
      <p> Input is: {input} </p>
      <button id="weatherButton" onClick={fetchWeather}> Search weather </button>
      <br />
      <br />
      <br />
      <br />
      <br />

      <div id="div-container">
        { showResults ? 
          <>
            <TemperatureCard 
              className = 'flex-item'
              precipitation = {response[1].values.precipitationProbabilityAvg} 
              humidity = {response[1].values.humidityAvg} 
              wind = {response[1].values.windSpeedAvg} 
              temperature = {response[1].values.temperatureAvg} 
              date = {new Date(String(response[1].time))} 
              weathercode = {'F' + response[1].values.weatherCodeMax} 
            />

            <TemperatureCard 
              className = 'flex-item'
              precipitation = {response[2].values.precipitationProbabilityAvg} 
              humidity = {response[2].values.humidityAvg} 
              wind = {response[2].values.windSpeedAvg} 
              temperature = {response[2].values.temperatureAvg} 
              date = {new Date(String(response[2].time))} 
              weathercode = {'F' + response[2].values.weatherCodeMax} 
            />

            <TemperatureCard 
              className = 'flex-item'
              precipitation = {response[3].values.precipitationProbabilityAvg} 
              humidity = {response[3].values.humidityAvg} 
              wind = {response[3].values.windSpeedAvg} 
              temperature = {response[3].values.temperatureAvg} 
              date = {new Date(String(response[3].time))} 
              weathercode = {'F' + response[3].values.weatherCodeMax} 
            />

            <TemperatureCard 
              className = 'flex-item'
              precipitation = {response[4].values.precipitationProbabilityAvg} 
              humidity = {response[4].values.humidityAvg} 
              wind = {response[4].values.windSpeedAvg} 
              temperature = {response[4].values.temperatureAvg} 
              date = {new Date(String(response[4].time))} 
              weathercode = {'F' + response[4].values.weatherCodeMax} 
            />

            <TemperatureCard 
              className = 'flex-item'
              precipitation = {response[5].values.precipitationProbabilityAvg} 
              humidity = {response[5].values.humidityAvg} 
              wind = {response[5].values.windSpeedAvg} 
              temperature = {response[5].values.temperatureAvg} 
              date = {new Date(String(response[5].time))} 
              weathercode = {'F' + response[5].values.weatherCodeMax} 
            />
          </>
          : 
            <></> 
        } 
      </div>

    </div>
  );
}

export default App;
