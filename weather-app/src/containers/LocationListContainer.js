import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {setSelectedCity, setweather} from './../actions';
import {getWeatherCities} from './../reducers';
import LocationList from './../components/LocationList';

class LocationListContainer extends Component {


  componentDidMount(){
    this.props.setweather(this.props.cities);
  }

    handleSelectedLocation = city =>{
        this.props.dispatchSetCity(city);
      } 

    render() {
        return (
            
                       <LocationList cities={this.props.citiesWeather}
           onSelectedLocation ={this.handleSelectedLocation} 
           />
           );
    }
}

LocationListContainer.propTypes = {
    setCity: PropTypes.func.isRequired,
    cities: PropTypes.array.isRequired,
    citiesWeather: PropTypes.array,
};

const mapDispatchToProps =dispatch=>(
    {
      setCity: value => dispatch(setSelectedCity(value)),
      setweather: cities => dispatch(setweather(cities)),

    });

    const mapStateToProps = state => ({citiesWeather: getWeatherCities(state)});
    export default connect(mapStateToProps, mapDispatchToProps)(LocationListContainer)