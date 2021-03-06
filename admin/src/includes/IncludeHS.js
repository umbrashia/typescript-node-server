import React, { Component, Children } from 'react';
import PropTypes from 'prop-types';
import { createMuiTheme, withStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Hidden from '@material-ui/core/Hidden';
import { BrowserRouter as Router, Route, HashRouter, Switch, } from "react-router-dom";
import Navigator from './SlideNav';
// import Content from './Content';

import { Dashboard } from '../components';
import AddEditFilter from '../components/AddEditFilter';


let theme = createMuiTheme({
    typography: {
        h5: {
            fontWeight: 500,
            fontSize: 26,
            letterSpacing: 0.5,
        },
    },
    palette: {
        primary: {
            light: '#63ccff',
            main: '#009be5',
            dark: '#006db3',
        },
    },
    shape: {
        borderRadius: 8,
    },
});

theme = {
    ...theme,
    overrides: {
        MuiDrawer: {
            paper: {
                backgroundColor: '#18202c',
            },
        },
        MuiButton: {
            label: {
                textTransform: 'none',
            },
            contained: {
                boxShadow: 'none',
                '&:active': {
                    boxShadow: 'none',
                },
            },
        },
        MuiTabs: {
            root: {
                marginLeft: theme.spacing(1),
            },
            indicator: {
                height: 3,
                borderTopLeftRadius: 3,
                borderTopRightRadius: 3,
                backgroundColor: theme.palette.common.white,
            },
        },
        MuiTab: {
            root: {
                textTransform: 'none',
                margin: '0 16px',
                minWidth: 0,
                padding: 0,
                [theme.breakpoints.up('md')]: {
                    padding: 0,
                    minWidth: 0,
                },
            },
        },
        MuiIconButton: {
            root: {
                padding: theme.spacing(1),
            },
        },
        MuiTooltip: {
            tooltip: {
                borderRadius: 4,
            },
        },
        MuiDivider: {
            root: {
                backgroundColor: '#404854',
            },
        },
        MuiListItemText: {
            primary: {
                fontWeight: theme.typography.fontWeightMedium,
            },
        },
        MuiListItemIcon: {
            root: {
                color: 'inherit',
                marginRight: 0,
                '& svg': {
                    fontSize: 20,
                },
            },
        },
        MuiAvatar: {
            root: {
                width: 32,
                height: 32,
            },
        },
    },
    props: {
        MuiTab: {
            disableRipple: true,
        },
    },
    mixins: {
        ...theme.mixins,
        toolbar: {
            minHeight: 48,
        },
    },
};

const drawerWidth = 256;



export default withStyles(
    {
        root: {
            display: 'flex',
            minHeight: '100vh',
        },
        drawer: {
            [theme.breakpoints.up('sm')]: {
                width: drawerWidth,
                flexShrink: 0,
            },
        },
        appContent: {
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            marginBottom:'25px'
        },
        mainContent: {
            flex: 1,
            padding: '48px 36px 0',
            background: '#eaeff1',
        },
    }
)(

    class IncludeHS extends Component {

        constructor(props) {
            super(props)
            this.props = {
                classes: PropTypes.object.isRequired,
            };
        }
        state = {
            mobileOpen: false,
        };

        handleDrawerToggle = () => {
            this.setState(state => ({ mobileOpen: !state.mobileOpen }));
        };

        render() {
            const { classes } = this.props;

            return (
                <ThemeProvider theme={theme}>
                    <Router>
                        <HashRouter>
                            <div className={classes.root}>
                                <CssBaseline />
                                <nav className={classes.drawer}>
                                    <Hidden smUp implementation="js">
                                        <Navigator
                                            PaperProps={{ style: { width: drawerWidth } }}
                                            variant="temporary"
                                            open={this.state.mobileOpen}
                                            onClose={this.handleDrawerToggle}
                                        />
                                    </Hidden>
                                    <Hidden xsDown implementation="css">
                                        <Navigator PaperProps={{ style: { width: drawerWidth } }} />
                                    </Hidden>
                                </nav>
                                <div className={classes.appContent}>                  
                                    <Switch>
                                        <Route exact path="/" component={Dashboard} />
                                        <Route path="/addfilter/:filterType" component={AddEditFilter} />
                                        <Route path="/editfilter/:id" component={AddEditFilter} />
                                        {/* <Route path="/managefilter/:filterType?" component={ManageFilter} />
                                        <Route path="/filterlist/:filterType" component={FiltersList} /> */}
                                    </Switch>     
                                </div>
                            </div>
                        </HashRouter>
                    </Router>
                </ThemeProvider>
            );
        }

    }
);