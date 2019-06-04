import React, { Component } from 'react';
import { connect } from 'react-redux'
import { doLogin } from '../actions/AdminAction';
import HttpRequestResponse from '../helpers/HttpRequestResponse';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { LoginForm } from './forms';


const useStyles = makeStyles(theme => ({
    '@global': {
        body: {
            backgroundColor: theme.palette.common.white,
        },
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default connect((state) => {

    return { HttpReducer: state.HttpReducer };


})(  withStyles(useStyles)(

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
                        <LoginForm classes={classes}/>
                    </div>
                    <Box mt={5}>
                        <this.MadeWithLove />
                    </Box>
                </Container>
            );
        }


    }))