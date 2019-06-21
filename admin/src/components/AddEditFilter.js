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
import { Toolbar, Button, Tooltip } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import RefreshIcon from '@material-ui/icons/Refresh';
// import Button from '@material-ui/core/Button';
// import Extension from '@material-ui/icons/extension';
import { Extension } from '@material-ui/icons';
import HttpRequestResponse from '../helpers/HttpRequestResponse';
import { FilterForm } from './forms';


// import  $ from 'jquery';

const lightColor = 'rgba(255, 255, 255, 0.7)';

export default withStyles((theme) => {
    return {
        paper: {
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

    }
})(connect((state) => {
    return {
        HttpReducer: state.HttpReducer
    };
})(class Dashboard extends Component {

    constructor(props) {
        super(props)
        this.state = { value: "cmspage", filterListData: [] };
    }

    handleResetClick = ({ index }) => {
        return alert(index);
        const updatedRows = [...this.state.rows];
        updatedRows[index].car = "";
        this.setState({ rows: updatedRows });
    };

    async componentDidMount() {
        let data = await new HttpRequestResponse(this.props).doJsonBodyRequest("api/admin/getFilters", { filterType: this.state.value }, true);
        var addResetBtn = ({ index }) => {
            return (
                <Button
                    className="btn"
                    onClick={this.handleResetClick.bind(this, { index: index })} >Reset
                </Button>
            );
        };
        data.data.filterData = data.data.filterData.map((ar, index, ) => {
            ar.action = addResetBtn.call(this, { index: index });
            return ar;
        });
        await this.setState({ filterListData: data.data.filterData });
    }

    async componentWillMount() {

    }

    render() {
        const { classes } = this.props;
        console.log(this.props);
        return (
            <Fragment>
                <Header onDrawerToggle={null} headerName="Add/Edit Filters">
                </Header>
                <main >
                    <br />
                    
                    <Paper className={classes.paper}>
                        <AppBar position="static" color="default" >
                            <Toolbar>
                                <Grid container spacing={2} alignItems="center">
                                    <Grid item>
                                        <Extension className={classes.block} color="inherit" />
                                    </Grid>
                                    <Grid item>
                                        <Button variant="contained" color="primary" className={classes.addUser}>
                                            Add Data
                                        </Button>
                                        <Tooltip title="Reload">
                                            <IconButton>
                                                <RefreshIcon className={classes.block} color="inherit" />
                                            </IconButton>
                                        </Tooltip>
                                    </Grid>
                                </Grid>
                            </Toolbar>
                        </AppBar>
                        {/* {this.state.value} */}
                        <FilterForm onSubmit={(e)=>{}}></FilterForm>
                    </Paper>
                </main>
            </Fragment>
        );
    }
}))