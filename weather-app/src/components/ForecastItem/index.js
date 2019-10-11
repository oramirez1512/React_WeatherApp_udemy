import React from 'react';
import PropTypes from 'prop-types';
import WeatherData from './../WeatherLocation/WeatherData';

const data = {
    temperature: 10,
    humidity: 10,
    weatherState: 'normal',
    wind: 'normal',
}
const ForecastItem = ({weekDay, hour}) =>(
    <di>
        <div>
        {weekDay} Hora: {hour} hs
        </div>
        <WeatherData data ={data}></WeatherData>
    </di>
);


ForecastItem.propTypes = {
    weekDay: PropTypes.string.isRequired,
    hour: PropTypes.number.isRequired,
}

export default ForecastItem;