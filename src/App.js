import './App.css';
import Date from './components/Date';
import Search from './components/Search';
import Location from './components/Location';
import Weather from './components/Weather';

// const api = {
//   // api key and website
//   key: "f4be8ea674941a8496cbfb9f741f228b",
//   base: "https://api.openweathermap.org/data/2.5/"
// }
function App() {
  return (
    <div className="App">
      <Search/>
      <Location/>
      <Date/>
      <Weather/>
    </div>
  );
}

export default App;
