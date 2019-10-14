import React, { Component} from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import transformForecast from './../services/transformForecast';
import './styles.css';
/*
const days = [
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
];
const data = {
    temperature: 10,
    humidity: 10,
    weatherState: 'normal',
    wind: 'normal',
};
*/

const api_key ="2856124217d1a6c58a5f28e2f10e3b54";
const url_base_forecast ="http://api.openweathermap.org/data/2.5/forecast";
class ForecastExtended extends Component {

    constructor(){
        super();
        this.state = { forecastData: null}
    }

    componentDidMount(){
        //fetch or axios
        this.updatecity(this.props.city);
    }

    componentWillReceiveProps(nextprops)
    {
        if(nextprops.city !== this.props.city)
        {
            this.setState({forecastData: null})
            this.updatecity(nextprops.city);
        }
    }

    updatecity = city =>{
        const url_forecast = `${url_base_forecast}?q=${city}&appid=${api_key}`;
        
        fetch(url_forecast).then(
            data => (data.json())
        ).then(
            weather_data =>{
                console.log(weather_data);
                const forecastData = transformForecast(weather_data);
                console.log(forecastData);
                this.setState({forecastData});
            }
        );
    }

    renderForecastItemDays(forecastData){
        
        return forecastData.map(forecast => 
            (<ForecastItem 
                key= {`${forecast.weekday}${forecast.hour}`}
                weekDay={forecast.weekday} 
                hour={forecast.hour} 
                data ={forecast.data}></ForecastItem>));
    }
    renderProgress = () =>{
        return <h3>Cargando pronóstico extendido...</h3>;
    }

    render() {
        const {city} = this.props;
        const {forecastData}= this.state;
        return(
        <div>
            <h2 className='forecast-title'>
            Pronóstico Extendido para {city}
            </h2>
            {forecastData ?
            this.renderForecastItemDays(forecastData):
            this.renderProgress()}
        </div>
        );
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
}
export default ForecastExtended;