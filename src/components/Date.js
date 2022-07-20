import React from "react";

function Date() {
    const api = {
        // api key and website
        key: "f4be8ea674941a8496cbfb9f741f228b",
        base: "https://api.openweathermap.org/data/2.5/"
    }
    const todayDate = (e) => {
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        let day = days[e.getDay()];
        let date = e.getDate();
        let month = months[e.getMonth()];
        let year = e.getYear();

        return `${day} ${date} ${month} ${year}`
    }

    return (
        <div className="date">{todayDate(new Date())}</div>
    )
}

export default Date