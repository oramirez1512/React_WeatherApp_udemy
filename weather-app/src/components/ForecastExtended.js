import React, { Component} from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem'
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
const url_base_weather ="http://api.openweathermap.org/data/2.5/forecast";
class ForecastExtended extends Component {

    constructor(){
        super();
        this.state = { forecastData: null}
    }

    componentDidMount(){
        
    }

    renderForecastItemDays(){
        return "Render Items";
        //return days.map(day => (<ForecastItem weekDay={day} hour={10} data ={data}></ForecastItem>));
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
            this.renderForecastItemDays():
            this.renderProgress()}
        </div>
        );
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
}
export default ForecastExtended;