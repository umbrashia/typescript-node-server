import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './includes/Header';
import Dashboard from './components/Dashboard';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Signin from './components/Signin';
import { connect } from 'react-redux'
import progressBar from './assets/images/progressBarApp.svg'
import { doLogin } from './actions/AdminAction';

class App extends Component {

  constructor(props) {
    super(props);
    //this.state = { dashboardAccess: false };

  }

  async componentDidMount() {
    let token = localStorage.getItem("token");
    if (token)
      this.props.dispatch(doLogin(token));
  }

  render() {

    //let dashboardAccess = true;
    console.log("jai Hoo", this.props.HttpReducer);

    return (
      <div className="">
        {this.props.HttpReducer.dashboardAccess == false ?
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
        {this.props.HttpReducer.fetching &&
          <div style={{ color: '#FFF', position: 'fixed', bottom: '15px', right: '15px', backgroundColor: '#cddc39', opacity: 0.9, borderRadius: '18px', padding: '5px' }}>
            <img src={progressBar} alt="logo" />
          </div>
        }
      </div>
    );
  }
}

export default connect((state) => {
  // console.log(state);

  return { HttpReducer: state.HttpReducer };
})(App);
