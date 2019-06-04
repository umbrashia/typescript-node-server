import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import HelpIcon from '@material-ui/icons/Help';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import userIcon from '../assets/images/user.jpg'

const lightColor = 'rgba(255, 255, 255, 0.7)';

const styles = theme => ({
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
        color: lightColor,
        '&:hover': {
            color: theme.palette.common.white,
        },
    },
    button: {
        borderColor: lightColor,
    },
});

export default withStyles(styles)(class Header extends Component {

    constructor(props){
        super(props);
        this.props={
            classes: PropTypes.object.isRequired,
            onDrawerToggle: PropTypes.func.isRequired,
          };
    }


    render() {
        
        const { classes, onDrawerToggle } = this.props;
        return (
            
                <React.Fragment>
                    <AppBar color="primary" position="sticky" elevation={0}>
                        <Toolbar>
                            <Grid container spacing={1} alignItems="center">
                                <Hidden smUp>
                                    <Grid item>
                                        <IconButton
                                            color="inherit"
                                            aria-label="Open drawer"
                                            onClick={onDrawerToggle}
                                            className={classes.menuButton}>
                                            <MenuIcon />
                                        </IconButton>
                                    </Grid>
                                </Hidden>
                                <Grid item xs />
                                <Grid item>
                                    <Typography className={classes.link} component="a" href="#">
                                        Go to docs
              </Typography>
                                </Grid>
                                <Grid item>
                                    <Tooltip title="Alerts • No alters">
                                        <IconButton color="inherit">
                                            <NotificationsIcon />
                                        </IconButton>
                                    </Tooltip>
                                </Grid>
                                <Grid item>
                                    <IconButton color="inherit" className={classes.iconButtonAvatar}>
                                        <Avatar
                                            className={classes.avatar}
                                            src={userIcon}
                                            alt="My Avatar"
                                        />
                                    </IconButton>
                                </Grid>
                            </Grid>
                        </Toolbar>
                    </AppBar>
                    <AppBar
                        component="div"
                        className={classes.secondaryBar}
                        color="primary"
                        position="static"
                        elevation={0}>
                        <Toolbar>
                            <Grid container alignItems="center" spacing={1}>
                                <Grid item xs>
                                    <Typography color="inherit" variant="h5" component="h1">
                                        Authentication
              </Typography>
                                </Grid>
                                <Grid item>
                                    <Button className={classes.button} variant="outlined" color="inherit" size="small">
                                        Web setup
              </Button>
                                </Grid>
                                <Grid item>
                                    <Tooltip title="Help">
                                        <IconButton color="inherit">
                                            <HelpIcon />
                                        </IconButton>
                                    </Tooltip>
                                </Grid>
                            </Grid>
                        </Toolbar>
                    </AppBar>
                    {this.props.children}
                    
                </React.Fragment>
                
              
              
           
        );
    }
});