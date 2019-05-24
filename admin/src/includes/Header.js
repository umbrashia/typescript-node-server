import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class Header extends Component {


    render() {
        return (
            <div>
                <div className="overlay"></div>
                <div className="search-bar">
                    <div className="search-icon">
                        <i className="material-icons">search</i>
                    </div>
                    <input type="text" placeholder="START TYPING..." />
                    <div className="close-search">
                        <i className="material-icons">close</i>
                    </div>
                </div>

                <nav className="navbar">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a href="" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse" aria-expanded="false"></a>
                            <a href="" className="bars"></a>
                            <Link className="navbar-brand" to="/">OLIVE - DASHBOARD</Link>
                        </div>
                        <div className="collapse navbar-collapse" id="navbar-collapse">
                            <ul className="nav navbar-nav navbar-right">

                                {/* <li><a href="#" className="js-search" data-close="true"><i className="material-icons">search</i></a></li> */}

                                <li className="dropdown">
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button">
                                        <i className="material-icons">notifications</i>
                                        <span className="label-count">7</span>
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li className="header">NOTIFICATIONS</li>
                                        <li className="body">
                                            <ul className="menu">
                                                <li>
                                                    <a href="#">
                                                        <div className="icon-circle bg-light-green">
                                                            <i className="material-icons">person_add</i>
                                                        </div>
                                                        <div className="menu-info">
                                                            <h4>12 new members joined</h4>
                                                            <p>
                                                                <i className="material-icons">access_time</i> 14 mins ago
                                                </p>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <div className="icon-circle bg-cyan">
                                                            <i className="material-icons">add_shopping_cart</i>
                                                        </div>
                                                        <div className="menu-info">
                                                            <h4>4 sales made</h4>
                                                            <p>
                                                                <i className="material-icons">access_time</i> 22 mins ago
                                                </p>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <div className="icon-circle bg-red">
                                                            <i className="material-icons">delete_forever</i>
                                                        </div>
                                                        <div className="menu-info">
                                                            <h4><b>Nancy Doe</b> deleted account</h4>
                                                            <p>
                                                                <i className="material-icons">access_time</i> 3 hours ago
                                                </p>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <div className="icon-circle bg-orange">
                                                            <i className="material-icons">mode_edit</i>
                                                        </div>
                                                        <div className="menu-info">
                                                            <h4><b>Nancy</b> changed name</h4>
                                                            <p>
                                                                <i className="material-icons">access_time</i> 2 hours ago
                                                </p>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <div className="icon-circle bg-blue-grey">
                                                            <i className="material-icons">comment</i>
                                                        </div>
                                                        <div className="menu-info">
                                                            <h4><b>John</b> commented your post</h4>
                                                            <p>
                                                                <i className="material-icons">access_time</i> 4 hours ago
                                                </p>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <div className="icon-circle bg-light-green">
                                                            <i className="material-icons">cached</i>
                                                        </div>
                                                        <div className="menu-info">
                                                            <h4><b>John</b> updated status</h4>
                                                            <p>
                                                                <i className="material-icons">access_time</i> 3 hours ago
                                                </p>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <div className="icon-circle bg-purple">
                                                            <i className="material-icons">settings</i>
                                                        </div>
                                                        <div className="menu-info">
                                                            <h4>Settings updated</h4>
                                                            <p>
                                                                <i className="material-icons">access_time</i> Yesterday
                                                </p>
                                                        </div>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="footer">
                                            <a href="#">View All Notifications</a>
                                        </li>
                                    </ul>
                                </li>

                                <li className="dropdown">
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button">
                                        <i className="material-icons">flag</i>
                                        <span className="label-count">9</span>
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li className="header">TASKS</li>
                                        <li className="body">
                                            <ul className="menu tasks">
                                                <li>
                                                    <a href="#">
                                                        <h4>
                                                            Footer display issue
                                                <small>32%</small>
                                                        </h4>
                                                        <div className="progress">
                                                            <div className="progress-bar bg-pink" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style={{ width: '32%' }}>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <h4>
                                                            Make new buttons
                                                <small>45%</small>
                                                        </h4>
                                                        <div className="progress">
                                                            <div className="progress-bar bg-cyan" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style={{ width: '32%' }}>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <h4>
                                                            Create new dashboard
                                                <small>54%</small>
                                                        </h4>
                                                        <div className="progress">
                                                            <div className="progress-bar bg-teal" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style={{ width: '54%' }} >
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <h4>
                                                            Solve transition issue
                                                <small>65%</small>
                                                        </h4>
                                                        <div className="progress">
                                                            <div className="progress-bar bg-orange" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style={{ width: '65%' }}>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <h4>
                                                            Answer GitHub questions
                                                <small>92%</small>
                                                        </h4>
                                                        <div className="progress">
                                                            <div className="progress-bar bg-purple" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style={{ width: '92%' }}>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="footer">
                                            <a href="#">View All Tasks</a>
                                        </li>
                                    </ul>
                                </li>


                            </ul>
                        </div>
                    </div>
                </nav>



                <section>

                    <aside id="leftsidebar" className="sidebar">

                        <div className="user-info">
                            <div className="image">
                                <img src="images/user.png" width="48" height="48" alt="User" />
                            </div>
                            <div className="info-container">
                                <div className="name" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">John Doe</div>
                                <div className="email">john.doe@example.com</div>
                                <div className="btn-group user-helper-dropdown">
                                    <i className="material-icons" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">keyboard_arrow_down</i>
                                    <ul className="dropdown-menu pull-right">
                                        <li><Link to="/profile"><i className="material-icons">person</i>Profile</Link></li>
                                        <li role="separator" className="divider"></li>
                                        <li><Link to="/signout"><i className="material-icons">input</i>Sign Out</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="menu">
                            <ul className="list">
                                <li className="header">MAIN NAVIGATION</li>
                                <li className="active">
                                    <Link to="/">
                                        <i className="material-icons">home</i>
                                        <span>Home</span>
                                    </Link>
                                </li>
                                <li>
                                    <a href="javascript:void(0);" className="menu-toggle">
                                        <i className="material-icons">widgets</i>
                                        <span>Site Filters</span>
                                    </a>
                                    <ul className="ml-menu">
                                        <li>
                                        <Link to="/filterlist/cmspage">CMS Pages</Link>
                                        </li>
                                        <li>
                                        <Link to="/filterlist/homeslider">Home Slider</Link>
                                        </li>
                                        <li>
                                        <Link to="/filterlist/blog">Blogs</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="header">LABELS</li>
                                <li>
                                    <a href="javascript:void(0);">
                                        <i className="material-icons col-red">donut_large</i>
                                        <span>Important</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);">
                                        <i className="material-icons col-amber">donut_large</i>
                                        <span>Warning</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);">
                                        <i className="material-icons col-light-blue">donut_large</i>
                                        <span>Information</span>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="legal">
                            <div className="copyright">
                                &copy; 2016 - 2017 <a href="javascript:void(0);">AdminBSB - Material Design</a>.
                </div>
                            <div className="version">
                                <b>Version: </b> 1.0.5
                </div>
                        </div>

                    </aside>

                </section>


            </div>
        );
    }
}