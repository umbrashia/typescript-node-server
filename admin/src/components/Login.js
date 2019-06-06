import React, { Component } from 'react';
import { connect } from 'react-redux';
import { doLogin, setDashboardProgress } from '../actions/AdminAction';
import HttpRequestResponse from '../helpers/HttpRequestResponse';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { LoginForm } from './forms';


export default withStyles({})(connect((state) => {
    return { HttpReducer: state.HttpReducer };
})(

    class Login extends Component {


        constructor(props) {
            super(props)

        }

        componentDidMount() {

        }


        async handleSubmit(event) {
            event.preventDefault();

            let response = await new HttpRequestResponse(this.props).doJsonBodyRequest("api/admin/adminLogin",
                { userName: this.refs.userName.value, password: this.refs.password.value }, true)
            if (response)
                if (response.status) {
                    localStorage.setItem("token", response.data.token);
                    this.props.dispatch(doLogin(response.data.token));
                }

            //{this.props.HttpReducer.token}
        }

        MadeWithLove() {
            return (
                <Typography variant="body2" color="textSecondary" align="center">
                    {'Built with love by the '}
                    <Link color="inherit" href="https://material-ui.com/">
                        Material-UI
            </Link>
                    {' team.'}
                </Typography>
            );
        }

        render() {


            const classes = this.props.classes;
            return (
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <br /><br />

                    <div className={classes.paper}>
                        <center>
                            <Avatar className={classes.avatar}>
                                <LockOutlinedIcon />
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                Sign in
                            </Typography>
                        </center>
                        <LoginForm classes={classes} onSubmit={(v) => {
                            this.props.dispatch(setDashboardProgress(true));
                            alert("oee")
                        }} />
                    </div>
                    <Box mt={5}>
                        <this.MadeWithLove />
                    </Box>
                </Container>
            );
        }


    }))