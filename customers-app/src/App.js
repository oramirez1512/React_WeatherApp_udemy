import React from 'react';
import {Link, BrowserRouter as Router, Route} from 'react-router-dom';
import HomeContainer from './containers/HomeContainer'
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <Route exact path="/" component={HomeContainer}/>
    <Link to = "/customers">Customers</Link><br></br>
      <Link to = "/customers/30000000">Customer 30000000</Link>
    </div>
    </Router>
  );
}

export default App;
