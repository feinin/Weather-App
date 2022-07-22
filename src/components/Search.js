import React, { useEffect, useState } from "react";
import App from "../App";


function Search({searchChange}) {
    
    // const api = {
    //     key: "89f917705645d8f253fdfa1389379c95",
    //     url: "http://api.openweathermap.org/data/2.5/weather?"
    // }
    // const getTodaysDate = (d) => {
    // const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    // const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

    // let day = days[d.getDay()];
    // let date = d.getDate();
    // let month = months[d.getMonth()];
    // let year =d.getFullYear();
    //     return`${day}${date}${month}${year}`
    // }

    // const [query, setQuery] = useState('');
    // const [weather, setWeather] = useState({});
    // const searchLocation = event => {
    //     if(event.key === 'Enter'){
    //         fetch(`${api.url}weather?q=${query}&appid${api.key}&units=metric`)
    //         .then(res => res.json())
    //         .then(result => {
    //             setWeather(result);
    //             setQuery('');
    //             console.log(result)
    //         })
    //     }
    // }
        return (
        <div className="search-box">
        <input 
        type="text"
        className="search-bar"
        placeholder="Search for City"
        // onChange={e => setQuery(e.target.value)}
        // onClick={handleOnClick}
        // value={query}
        // onKeyPress={searchLocation}
        />
        {/* <div className="date">{getTodaysDate(new Date())}</div> */}
        </div>
    )
}


export default Search