import React, { Component } from 'react';
import './App.css';
import WeatherLocation from './components/WeatherLocation'
import LocationList from './components/LocationList';

const cities =[
  'Cali,co',
  'Madrid,es',
  'Miami, us',
  'Lima,pe',
];
class  App extends Component {

  handleSelectedLocation = city =>{
    console.log(`handleSelectedLocation: ${city}`);
  } 
  render(){
  return (
    <div className="App">
    <LocationList cities={cities}
      onSelectedLocation ={this.handleSelectedLocation}
    />
    </div>
  );
  };
}

export default App;
