import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from '../WeatherTemperature';
import {
    CLOUD,
    DAY_SUNNY,
    CLOUDY,
    RAIN,
    SNOW,
    WINDY,

} from '../../../constants/Weather'
const WeatherData =()  => (
    <div>
        <WeatherTemperature 
            temperature ={20} 
            weatherState={WINDY}
        />
        <WeatherExtraInfo 
            humidity ={80}
             wind ={"10 mt/s"}
        />
    </div>
);

export default WeatherData;