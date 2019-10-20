import React , {Component} from 'react';
import {Link, BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HomeContainer from './containers/HomeContainer'
import CustomersContainer from './containers/CustomersContainer';
import CustomerContainer from './containers/CustomerContainer';
import './App.css';

class App extends Component {

  renderHome = () => <h1>Home</h1>;
  renderCustomerContainer = () => <h1>Customer Container</h1>;
  render(){
  return (
    <Router>
    <div className="App">
      <Route exact path="/" component={HomeContainer}/>
      <Route exact path="/customers" component={CustomersContainer} />
      <Switch>
        <Route path="/customers/:dni" component={CustomerContainer}></Route>
      </Switch>
    </div>
    </Router>
  );
  }
}

export default App;
