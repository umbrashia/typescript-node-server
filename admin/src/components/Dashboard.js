import React, { Component, Fragment } from 'react';
import { Header } from '../includes';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { IntegratedSorting, SortingState } from '@devexpress/dx-react-grid';
import { Grid as TGrid, Table, TableHeaderRow } from '@devexpress/dx-react-grid-material-ui';
import {Link} from 'react-router-dom';
import { Toolbar, Button, Tooltip } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import RefreshIcon from '@material-ui/icons/Refresh';
import { Extension } from '@material-ui/icons';
import HttpRequestResponse from '../helpers/HttpRequestResponse';


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
        contentWrapper: {
            margin: '40px 16px',
        },
        secondaryBar: {
            zIndex: 0,
        },
        menuButton: {
            marginLeft: -theme.spacing(1),
        },
        iconButtonAvatar: {
            padding: 4,
        },
        link: {
            textDecoration: 'none',

        },
        button: {
            borderColor: lightColor,
        },
        gridPadding:{
            padding:theme.spacing(2)
        }
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
                <Header onDrawerToggle={null} headerName="Site Data Managment">
                    <AppBar
                        component="div"
                        className={classes.tabstyle}
                        color="primary"
                        position="static"
                        elevation={0}>
                        <Tabs
                            component="div"
                            className={classes.secondaryBar}
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
                            <Tab textColor="inherit" value="Add" label="Add/Edit Data" />
                        </Tabs>
                    </AppBar>
                </Header>
                <main >
                    <br />
                    
                    <Paper className={classes.paper}>
                        <AppBar position="static" color="default" >
                            <Toolbar>
                                <Grid container justify="center" spacing={2} alignItems="center">
                                    <Grid item>
                                        <Extension className={classes.block} color="inherit" />
                                    </Grid>
                                    <Grid item>
                                        <Button variant="contained"  color="primary" component={Link} to={"addfilter/"+this.state.value} className={classes.addUser}>
                                            Add New One
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
                        <TGrid
                            rows={this.state.filterListData}
                            columns={[
                                { name: 'filterTitle', title: 'Title' },
                                { name: 'filterDescription', title: 'Description' },
                                { name: 'filtersFeature', title: 'Feature' },
                                { name: 'filterStatus', title: 'Status' },
                                { name: "action", title: "action" },

                            ]}>
                            <SortingState defaultSorting={[{ columnName: 'filterTitle', direction: 'asc' }]} />
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