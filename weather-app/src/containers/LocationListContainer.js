import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import * as actions from './../actions';
import {getWeatherCities, getCity} from './../reducers';
import LocationList from './../components/LocationList';

class LocationListContainer extends Component {


  componentDidMount(){
    const {setweather, setSelectedCity, cities, city} = this.props;

    setweather(cities);
    setSelectedCity(city);

  }

    handleSelectedLocation = city =>{
        this.props.setSelectedCity(city);
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
    setSelectedCity: PropTypes.func.isRequired,
    setweather: PropTypes.func.isRequired,
    cities: PropTypes.array.isRequired,
    citiesWeather: PropTypes.array,
    city: PropTypes.string.isRequired,
};

/*const mapDispatchToProps =dispatch=>(
    {
      setCity: value => dispatch(setSelectedCity(value)),
      setweather: cities => dispatch(setweather(cities)),

    });
*/
const mapDispatchToProps =dispatch => bindActionCreators(actions, dispatch);

const mapStateToProps = state => ({
      citiesWeather: getWeatherCities(state),
      city: getCity(state)
    });
    export default connect(mapStateToProps, mapDispatchToProps)(LocationListContainer)