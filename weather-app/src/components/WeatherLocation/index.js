import React, {Component}from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import {
    CLOUD,
    DAY_SUNNY,
    CLOUDY,
    RAIN,
    SNOW,
    WINDY,

} from './../../constants/Weather';
const data ={
    temperature: 15,
    weatherState: RAIN,
    humidity: 10,
    wind: '10 m/s',
}

const location ="Buenos Aires,ar";
const api_key ="2856124217d1a6c58a5f28e2f10e3b54";
const url_base_weather ="http://api.openweathermap.org/data/2.5/weather";


const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;
class WeatherLocation extends Component {

    constructor(){
        super();
        this.state ={
            city: 'Cali',
            data: data,
        };
    }

    getWeatherState = weather_data =>{
        return RAIN;
    }

getData = weather_data =>{
    const {humidity, temp} = weather_data.main;
    const {speed} = weather_data.wind;
    const weatherState = this.getWeatherState(weather_data);

    const data = {
        humidity,
        temperature: temp,
        weatherState,
        wind: `${speed} m/s`,
    }
    return data;
}

    handleUpdateClick =() =>{
        console.log('Updated');
         fetch(api_weather).then( resolve => {
             
             return resolve.json();
         }).then(data => {
             const newWeather = this.getData(data);
             console.log(newWeather);
             debugger;
             this.setState({
                 data: newWeather
             });
         });
    }
    render(){
        const {city, data} = this.state;
        return (<div className ="weatherLocationCont">
        <Location city={city}></Location>
        <WeatherData data = {data}></WeatherData>
        <button onClick ={this.handleUpdateClick}>Update</button>
        </div>);
    }
    
};

export default WeatherLocation;