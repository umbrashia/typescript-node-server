import React, { Component, Fragment } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './includes/Header';
import { BrowserRouter as Router, Route, HashRouter, Switch, } from "react-router-dom";
import Signin from './components/Signin';
import { connect } from 'react-redux'
import { doLogin } from './actions/AdminAction';
import { FiltersList, Dashboard, ManageFilter, Login } from './components';
import { IncludeHS, Notification } from './includes';


class App extends Component {

  // constructor(props) {
  //   super(props);
  // }

  async componentDidMount() {
    let token = localStorage.getItem("token");
    if (token)
      this.props.dispatch(doLogin(token));
  }

  render() {

    //let dashboardAccess = true;
    //console.log("jai Hoo", this.props.HttpReducer);

    return (
      <Fragment>
        <Notification></Notification>
        {this.props.HttpReducer.dashboardAccess === false ?
          (
            <Login />
          ) :
          (
            <IncludeHS/>
            //     <Route exact path="/" component={Dashboard} />
            //     <Route path="/managefilter/:filterType?" component={ManageFilter} />
            //     <Route path="/filterlist/:filterType" component={FiltersList} />
          )
        }
        
      </Fragment>
    );
  }
}

export default connect((state) => {
  return { HttpReducer: state.HttpReducer };
})(App);
