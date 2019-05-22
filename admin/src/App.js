import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './includes/Header';
import Dashboard from './components/Dashboard';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Signin from './components/Signin';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {dashboardAccess: true};

  }

  render() {
    
    //let dashboardAccess = true;
    
    return (
      <div className="">
        {this.state.dashboardAccess == false ?
          (
            <Signin></Signin>
          ) :
          (
            <Router>
              <Header></Header>
              <Route  exact path="/" component={Dashboard} />
            </Router>
          )
        }

      </div>
    );
  }
}

export default App;
