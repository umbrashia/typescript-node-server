import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './includes/Header';
import Dashboard from './components/Dashboard';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Signin from './components/Signin';
import { connect } from 'react-redux'

class App extends Component {

  constructor(props) {
    super(props);
    //this.state = { dashboardAccess: false };

  }

  render() {

    //let dashboardAccess = true;
    console.log("jai Hoo",this.props.HttpReducer);
     
    return (
      <div className="">
        {this.props.HttpReducer.dashboardAccess== false ?
          (
            <Signin></Signin>
          ) :
          (
            <Router>
              <Header></Header>
              <Route exact path="/" component={Dashboard} />
            </Router>
          )
        }

      </div>
    );
  }
}

export default connect((state) => {
  // console.log(state);
  
  return { HttpReducer: state.HttpReducer };
})(App);
