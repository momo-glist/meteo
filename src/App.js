import React, { useState } from "react";
import Search from "./component/search";
import CurrentWeather from "./component/current-weather/current-weather";
import './App.css';
import { WEATHER_API_URL, WEATHER_API_KEY } from "./api";
import Forcast from "./component/forcast/forcast.jsx";



const App = () => {

    const [currentWeather, setCurrentWeather] = useState(null);
    const [forcats, setForcats] = useState(null);

    const handleOnSearchChange = (searcheData) => {
        const [la, lon] = searcheData.value.split("");

        const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${la}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);
        const forCastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${la}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);

        Promise.all([currentWeatherFetch, forCastFetch])
            .then(async (response) => {
                const weatherResponse = await response[0].json();
                const forCastrResponse = await response[1].json();

                setCurrentWeather({ city: searcheData.label, ...weatherResponse });
                setForcats({ city: searcheData.label, ...forCastrResponse });
            })
            .catch((err) => {
                console.log(err);
            })
    }

    console.log(currentWeather);
    console.log(forcats);

    return (
        <div className="container">
            <Search onSearchChange={handleOnSearchChange} />
            {CurrentWeather && <CurrentWeather data={currentWeather} />}
            { Forcast && <Forcast data={forcats}/>}
        </div>
    )
}

export default App;