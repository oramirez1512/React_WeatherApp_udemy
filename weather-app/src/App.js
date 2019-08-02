import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import {Grid,Col,Row} from 'react-flexbox-grid';

import './App.css';
import WeatherLocation from './components/WeatherLocation'
import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended';
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
    <Grid>
      <Row>
        <AppBar Title ="Weather App" position='sticky' />
      </Row>
      <Row>
        <Col xs ={12} md={6}>
        <LocationList cities={cities}
           onSelectedLocation ={this.handleSelectedLocation}
        />
        </Col>
        <Col xs={12} md={6}>
          <Paper zDepth={4}>
          <div className="details">
              <ForecastExtended></ForecastExtended> 
          </div>
          </Paper>          
        </Col>
      </Row>    
    </Grid>
  );
  };
}

export default App;
