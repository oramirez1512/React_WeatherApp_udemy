import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import {
    CLOUD,
    DAY_SUNNY,
    CLOUDY,
    RAIN,
    SNOW,
    WINDY,
    THUNDER,
    DRIZZLE

} from './../../../constants/Weather';
import './styles.css';
const icons ={
    [CLOUD]: "cloud",
    [CLOUDY]: "cloudy",
    [DAY_SUNNY]:"day-sunny",
    [RAIN]:"rain",
    [SNOW]:"snow",
    [WINDY]:"windy",
    [THUNDER]: "day-thunderstore",
    [DRIZZLE]: "day-showers",
    fog:"day-fog"
};

const getWeatherIcon = (weatherstate) =>{
    const sizeIcon ='4x';
    const icon =icons[weatherstate];
    if(icon)
    {
        return <WeatherIcons className="wicon" name = {icon} size ={sizeIcon}/>
    }
    else{
        return <WeatherIcons className="wicon" name = {"day-sunny"} size ={sizeIcon}/> 
    }

    
};
const WeatherTemperature =({temperature , weatherState})=>(
    <div className="weatherTemperatureCont">
        <span className="temperature">            
            {getWeatherIcon(weatherState)}        
            {`${temperature}`}
        </span>
        <span  className="temperatureType">
            {`C°`}
        </span>
            
        
    </div>
);

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
};

export default WeatherTemperature;