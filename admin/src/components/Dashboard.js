import React, { Component, Fragment } from 'react';
import { Header } from '../includes';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { IntegratedSorting, SortingState } from '@devexpress/dx-react-grid';
import { Grid as TGrid, Table, TableHeaderRow } from '@devexpress/dx-react-grid-material-ui';

import Typography from '@material-ui/core/Typography';
import { setDashboardProgress } from '../actions/AdminAction';
import { Toolbar } from '@material-ui/core';

// import  $ from 'jquery';



export default withStyles((theme)=>{
    return {paper: {
        maxWidth: 936,
        margin: 'auto',
        overflow: 'hidden',
      },
      searchBar: {
        borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
      },
      searchInput: {
        fontSize: theme.typography.fontSize,
      },
      block: {
        display: 'block',
      },
      addUser: {
        marginRight: theme.spacing(1),
      },
      contentWrapper: {
        margin: '40px 16px',
      },}
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
        const { classes } = this.props;
        console.log(this.props);
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
                <main >
                    <Paper className={classes.paper}>
                        <AppBar position="static" color="default" >
                            <Toolbar>
                                
                            </Toolbar>
                        </AppBar>
                        {this.state.value}
                        <TGrid
                            rows={[
                                { id: 0, product: 'DevExtreme', owner: 'DevExpress' },
                                { id: 1, product: 'DevExtreme Reactive', owner: 'DevExpress' },
                            ]}
                            columns={[
                                { name: 'id', title: 'ID' },
                                { name: 'product', title: 'Product' },
                                { name: 'owner', title: 'Owner' },
                            ]}>
                            <SortingState defaultSorting={[{ columnName: 'id', direction: 'asc' }]} />
                            <IntegratedSorting />
                            <Table />
                            <TableHeaderRow showSortingControls />
                        </TGrid>
                    </Paper>
                </main>
            </Fragment>
        );
    }
}))