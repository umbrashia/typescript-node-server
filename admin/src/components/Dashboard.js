import React, { Component } from 'react';
import { Header } from '../includes';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import Typography from '@material-ui/core/Typography';

// import  $ from 'jquery';



export default class Dashboard extends Component {

    constructor(props){
        super(props)
        this.state={value:"one"};
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
                        
                        color="primary"
                        position="static"
                        elevation={0}>
                        <Tabs value={this.state.value} onChange={(e)=>{
                            console.log(e);
                            
                        }}>
                            <Tab value="one" label="New Arrivals in the Longest Text of Nonfiction" wrapped />
                            <Tab value="two" label="Item Two" />
                            <Tab value="three" label="Item Three" />
                        </Tabs>
                        </AppBar>
                    
                    

                  
                </Header>

                <main className={{
                    flex: 1,
                    padding: '48px 36px 0',
                    background: '#eaeff1',
                }}>
                    {this.state.value === 'one' && "Item One"}
                    {this.state.value === 'two' && "Item tw"}
                    {this.state.value === 'three' && "Item Three"}
                </main>

            </div>
        );
    }
}