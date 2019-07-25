import React, {Component}from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import {api_weather} from './../../constants/api_url'; 
import transformWeather from './../../services/transformWeather';


class WeatherLocation extends Component {

    constructor(){
        super();
        this.state ={
            city: 'Cali',
            data: null,
        };
        console.log("constructor");
    };

    

componentDidMount() {
console.log("componentDidMount");
this.handleUpdateClick();
}

componentDidUpdate(prevProps, prevState) {
  console.log("componentDidUpdate");  
  
}



    handleUpdateClick =() =>{        
        console.log('Updated');
         fetch(api_weather).then( resolve => {
             
             return resolve.json();
         }).then(data => {
            console.log("result of handleUpdateClick");
             const newWeather = transformWeather(data);
             console.log(newWeather);
             debugger;
             this.setState({
                 data: newWeather
             });
         });
    }
    render(){
        console.log("render");
        const {city, data} = this.state;
        return (<div className ="weatherLocationCont">
        <Location city={city}></Location>
        {data ?
        <WeatherData data = {data}></WeatherData>:
        "loading..."
        }
        </div>);
    }
    
};

export default WeatherLocation;