import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import {PropTypes} from 'prop-types';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';import transformWeather from './../../services/transformWeather';
import getUrlWeatherByCity from '../../services/getUrlWeatherByCity';


const WeatherLocation = ({onWeatherLocationClick,city, data}) => (
    
  

   /* handleUpdateClick =() =>{        
        console.log('Updated');
        const api_weather = getUrlWeatherByCity(this.state.city);
         fetch(api_weather).then( resolve => {
             
             return resolve.json();
         }).then(data => {
            console.log("result of handleUpdateClick");
             const newWeather = transformWeather(data);
             console.log(newWeather);
             
             this.setState({
                 data: newWeather
             });
         });
    }*/
    <div className ="weatherLocationCont" onClick ={onWeatherLocationClick}>
        <Location city={city}></Location>
        {data ?
        <WeatherData data = {data}></WeatherData>:
        <CircularProgress size ={50} thickness={7}></CircularProgress>
        }
        </div>   
    );

WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
    onWeatherLocationClick: PropTypes.func,
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,
    }),
}
export default WeatherLocation;