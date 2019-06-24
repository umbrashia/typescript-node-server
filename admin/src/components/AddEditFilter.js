import React, { Component, Fragment } from 'react';
import { Header } from '../includes';
import AppBar from '@material-ui/core/AppBar';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { Toolbar, Button, Tooltip } from '@material-ui/core';
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
        marginInputs: {
            margin: theme.spacing(1),
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

    async componentDidMount() {

    }

    async componentWillMount() {

    }

    async handleUploadChange(files) {
        
        if (files.length > 0) {
            const data = new FormData();
            for (let index = 0; index < files.length; index++) {
                data.append(`files`, files[index]);
            }
            data.append("filterType", this.props.match.params.filterType)
            var response = await new HttpRequestResponse(this.props).doJsonBodyRequest("api/admin/uploadGlobalFiles", data, true);
            this.setState({ ...this.state, files: response.data.uploadedPaths });
        }
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
                                        Add {this.state.value}      
                                    </Grid>
                                </Grid>
                            </Toolbar>
                        </AppBar>
                        {/* {this.state.value} */}
                        <FilterForm classes={classes} onSubmit={(e)=>{alert("adding");}} handleUploadChange={this.handleUploadChange.bind(this)}></FilterForm>
                    </Paper>
                </main>
            </Fragment>
        );
    }
}))