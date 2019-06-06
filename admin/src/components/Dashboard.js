import React, { Component, Fragment } from 'react';
import { Header } from '../includes';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import { setDashboardProgress } from '../actions/AdminAction';

// import  $ from 'jquery';



export default withStyles({
    tabstyle: {
        // marginLeft:"-100px",
        // padding : '10px',
        zIndex: 0,
      },
})(connect((state) => {
    return {
        HttpReducer: state.HttpReducer
    };
})(class Dashboard extends Component {

    constructor(props) {
        super(props)
        this.state = { value: "cmspage" };
    }

    async componentDidMount() {

    }

    async componentWillMount() {

    }

    render() {
        const {classes}=this.props;
        return (
            <Fragment>

                <Header onDrawerToggle={null}>
                    <AppBar
                        component="div"
                        className={classes.tabstyle}
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
                            <Tab textColor="inherit" value="cmspage" label="CMS Pages" />
                            <Tab textColor="inherit" value="homeslider" label="Home Slider" />
                            <Tab textColor="inherit" value="blog" label="Blogs" />
                        </Tabs>




                    </AppBar>



                </Header>

                <main className={{

                }}>
                    {this.state.value}
                    
                    
                </main>

            </Fragment>
        );
    }
}))