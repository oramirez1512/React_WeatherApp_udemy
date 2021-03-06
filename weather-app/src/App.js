
import React, { Component } from 'react';

import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import {Grid,Col,Row} from 'react-flexbox-grid';

import './App.css';
import WeatherLocation from './components/WeatherLocation'
import LocationListContainer from './containers/LocationListContainer';
import ForecastExtended from './components/ForecastExtended';
import ForecastExtendedContainter from './containers/ForecastExtendedContainer';
const cities =[
  'Cali,co',
  'Madrid,es',
  'Miami, us',
  'Lima,pe',
];




class  App extends Component {

 
  render(){
  return (
    <Grid>
      <Row>
        <AppBar Title ="Weather App" position='fixed' />
      </Row>
      <Row>
        <Col xs ={12} md={6}>
        <LocationListContainer cities={cities}
        />
        </Col>
        <Col xs={12} md={6}>
          <Paper zDepth={4}>
          <div className="details">
               <ForecastExtendedContainter ></ForecastExtendedContainter>           
          </div>
          </Paper>          
        </Col>
      </Row>    
    </Grid>
  );
  };
}
export default App;