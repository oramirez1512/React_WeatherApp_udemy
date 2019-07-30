import React, {Component}from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import {PropTypes} from 'prop-types';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';import transformWeather from './../../services/transformWeather';
import getUrlWeatherByCity from '../../services/getUrlWeatherByCity';


class WeatherLocation extends Component {

    constructor(props){
        super(props);
        const {city} = props;
        this.state ={
            city,
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
    }
    render(){
        console.log("render");
        const {city, data} = this.state;
        return (<div className ="weatherLocationCont">
        <Location city={city}></Location>
        {data ?
        <WeatherData data = {data}></WeatherData>:
        <CircularProgress size ={50} ></CircularProgress>
        }
        </div>);
    }
    
};

WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
}
export default WeatherLocation;