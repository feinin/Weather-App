import React, { useEffect, useState } from "react";
import App from "../App";


function Search({searchChange}) {
        return (
        <div className="search-box">
        <input 
        type="text"
        className="search-bar"
        placeholder="Search for City"
        />
        </div>
    )
}


export default Search