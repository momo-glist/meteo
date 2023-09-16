import React from "react";
import "./current-weather.css";
import clouds from "../icons/03n.png";
import rain from "../icons/10d.png";
import sun from "../icons/sunny_s_cloudy.png";
import fog from "../icons/fog.png";
import driz from "../icons/vent.png"


const CurrentWeather = ({ data }) => {
    if (!data || !data.weather || !data.weather[0] || !data.weather[0].main) {
        // Gérer le cas où data n'est pas défini ou n'a pas la structure attendue
        return null
    } 

    let weatherIcon = '';
    if (data.weather[0].main === "Clouds") {
        weatherIcon = clouds;
    } else if (data.weather[0].main === "Clear") {
        weatherIcon = sun;
    } else if (data.weather[0].main === "Rain") {
        weatherIcon = rain;
    } else if (data.weather[0].main === "Drizzle") {
        weatherIcon = driz;
    } else if (data.weather[0].main === "Mist") {
        weatherIcon = fog;
    } else {
        weatherIcon = driz;
    }

    return (
        <div className="weather">
            <div className="top">
                <div>
                    <p className="city">{data.city}</p>
                    <p className="weather-description">{data.weather[0].description}</p>
                </div>
                <img src={weatherIcon} alt="" className="weather-icon" />
            </div>
            <div className="bottom">
                <p className="temp">{Math.round(data.main.temp)}°C</p>
                <div className="details">
                    <div className="parameter-row">
                        <span className="parameter-label">Details</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Feels Like</span>
                        <span className="parameter-value">{Math.round(data.main.feels_like)}°C</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Wind</span>
                        <span className="parameter-value">{Math.round(data.wind.speed)}m/s</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Humidity</span>
                        <span className="parameter-value">{Math.round(data.main.humidity)}%</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Pressure</span>
                        <span className="parameter-value">{Math.round(data.main.pressure)}hPa</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CurrentWeather;
