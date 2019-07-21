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

const data2 ={
    temperature: 10,
    weatherState: CLOUDY,
    humidity: 15,
    wind: '20 m/s',
}

class WeatherLocation extends Component {

    constructor(){
        super();
        this.state ={
            city: 'Cali',
            data: data,
        };
    }
    handleUpdateClick =() =>{
        console.log('Updated');
        
        this.setState( {
            city: 'Tuluá',
            data:data2
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