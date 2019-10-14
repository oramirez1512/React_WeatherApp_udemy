import React from 'react';
import PropTypes from 'prop-types';
import WeatherData from './../WeatherLocation/WeatherData';

/*const data = {
    temperature: 10,
    humidity: 10,
    weatherState: 'normal',
    wind: 'normal',
}*/
const ForecastItem = ({weekDay, hour,data}) =>(
    <div>
        <h2>
        {weekDay} Hora: {hour} hs
        </h2>
        <WeatherData data ={data}></WeatherData>
    </div>
);


ForecastItem.propTypes = {
    weekDay: PropTypes.string.isRequired,
    hour: PropTypes.number.isRequired,
}

export default ForecastItem;