import React, { Component } from 'react';
import { Header } from '../includes';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';

import Typography from '@material-ui/core/Typography';

// import  $ from 'jquery';



export default class Dashboard extends Component {

    constructor(props) {
        super(props)
        this.state = { value: 0 };
    }

    async componentDidMount() {
        document.body.className = "theme-red";
    }

    async componentWillMount() {
        // window.admincall();
        // navigator.camera()
        //window.demoCall();


    }
    render() {

        return (
            <div>

                <Header onDrawerToggle={null}>
                    <AppBar
                        component="div"
                        className={{ zIndex: 0,}}
                        color="primary"
                        position="static"
                        elevation={0}>


                        <Tabs
                            value={this.state.value}
                            onChange={(e, val) => {
                                this.setState({ value: val });
                            }}
                            variant="scrollable"
                            scrollButtons="on"
                            indicatorColor="primary"
                            textColor="inherit">
                            <Tab textColor="inherit" label="Item One"  />
                            <Tab textColor="inherit" label="Item Two"  />
                            <Tab textColor="inherit" label="Item Three"  />
                            <Tab textColor="inherit" label="Item Four"  />
                        </Tabs>



                       
                    </AppBar>



                </Header>

                <main className={{

                }}>
                    {this.state.value === 0 && "Item One"}
                    {this.state.value === 1 && "Item tw"}
                    {this.state.value === 2 && "Item Three"}
                    {this.state.value === 3 && "Item four"}
                </main>

            </div>
        );
    }
}