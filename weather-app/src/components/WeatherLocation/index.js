import React, {Component}from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import {api_weather} from './../../constants/api_url'; 
import transformWeather from './../../services/transformWeather';
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



class WeatherLocation extends Component {

    constructor(){
        super();
        this.state ={
            city: 'Cali',
            data: data,
        };
    };

    

    handleUpdateClick =() =>{
        console.log('Updated');
         fetch(api_weather).then( resolve => {
             
             return resolve.json();
         }).then(data => {
             const newWeather = transformWeather(data);
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