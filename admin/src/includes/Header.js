import React, { Component } from 'react';

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
                            <a className="navbar-brand" href="index.html">ADMINBSB - MATERIAL DESIGN</a>
                        </div>
                        <div className="collapse navbar-collapse" id="navbar-collapse">
                            <ul className="nav navbar-nav navbar-right">

                                <li><a href="#" className="js-search" data-close="true"><i className="material-icons">search</i></a></li>

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
                                        <li><a href="javascript:void(0);"><i className="material-icons">person</i>Profile</a></li>
                                        <li role="separator" className="divider"></li>
                                        <li><a href="javascript:void(0);"><i className="material-icons">group</i>Followers</a></li>
                                        <li><a href="javascript:void(0);"><i className="material-icons">shopping_cart</i>Sales</a></li>
                                        <li><a href="javascript:void(0);"><i className="material-icons">favorite</i>Likes</a></li>
                                        <li role="separator" className="divider"></li>
                                        <li><a href="javascript:void(0);"><i className="material-icons">input</i>Sign Out</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="menu">
                            <ul className="list">
                                <li className="header">MAIN NAVIGATION</li>
                                <li className="active">
                                    <a href="index.html">
                                        <i className="material-icons">home</i>
                                        <span>Home</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="pages/typography.html">
                                        <i className="material-icons">text_fields</i>
                                        <span>Typography</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="pages/helper-classes.html">
                                        <i className="material-icons">layers</i>
                                        <span>Helper Classes</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);" className="menu-toggle">
                                        <i className="material-icons">widgets</i>
                                        <span>Widgets</span>
                                    </a>
                                    <ul className="ml-menu">
                                        <li>
                                            <a href="javascript:void(0);" className="menu-toggle">
                                                <span>Cards</span>
                                            </a>
                                            <ul className="ml-menu">
                                                <li>
                                                    <a href="pages/widgets/cards/basic.html">Basic</a>
                                                </li>
                                                <li>
                                                    <a href="pages/widgets/cards/colored.html">Colored</a>
                                                </li>
                                                <li>
                                                    <a href="pages/widgets/cards/no-header.html">No Header</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);" className="menu-toggle">
                                                <span>Infobox</span>
                                            </a>
                                            <ul className="ml-menu">
                                                <li>
                                                    <a href="pages/widgets/infobox/infobox-1.html">Infobox-1</a>
                                                </li>
                                                <li>
                                                    <a href="pages/widgets/infobox/infobox-2.html">Infobox-2</a>
                                                </li>
                                                <li>
                                                    <a href="pages/widgets/infobox/infobox-3.html">Infobox-3</a>
                                                </li>
                                                <li>
                                                    <a href="pages/widgets/infobox/infobox-4.html">Infobox-4</a>
                                                </li>
                                                <li>
                                                    <a href="pages/widgets/infobox/infobox-5.html">Infobox-5</a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="javascript:void(0);" className="menu-toggle">
                                        <i className="material-icons">swap_calls</i>
                                        <span>User Interface (UI)</span>
                                    </a>
                                    <ul className="ml-menu">
                                        <li>
                                            <a href="pages/ui/alerts.html">Alerts</a>
                                        </li>
                                        <li>
                                            <a href="pages/ui/animations.html">Animations</a>
                                        </li>
                                        <li>
                                            <a href="pages/ui/badges.html">Badges</a>
                                        </li>

                                        <li>
                                            <a href="pages/ui/breadcrumbs.html">Breadcrumbs</a>
                                        </li>
                                        <li>
                                            <a href="pages/ui/buttons.html">Buttons</a>
                                        </li>
                                        <li>
                                            <a href="pages/ui/collapse.html">Collapse</a>
                                        </li>
                                        <li>
                                            <a href="pages/ui/colors.html">Colors</a>
                                        </li>
                                        <li>
                                            <a href="pages/ui/dialogs.html">Dialogs</a>
                                        </li>
                                        <li>
                                            <a href="pages/ui/icons.html">Icons</a>
                                        </li>
                                        <li>
                                            <a href="pages/ui/labels.html">Labels</a>
                                        </li>
                                        <li>
                                            <a href="pages/ui/list-group.html">List Group</a>
                                        </li>
                                        <li>
                                            <a href="pages/ui/media-object.html">Media Object</a>
                                        </li>
                                        <li>
                                            <a href="pages/ui/modals.html">Modals</a>
                                        </li>
                                        <li>
                                            <a href="pages/ui/notifications.html">Notifications</a>
                                        </li>
                                        <li>
                                            <a href="pages/ui/pagination.html">Pagination</a>
                                        </li>
                                        <li>
                                            <a href="pages/ui/preloaders.html">Preloaders</a>
                                        </li>
                                        <li>
                                            <a href="pages/ui/progressbars.html">Progress Bars</a>
                                        </li>
                                        <li>
                                            <a href="pages/ui/range-sliders.html">Range Sliders</a>
                                        </li>
                                        <li>
                                            <a href="pages/ui/sortable-nestable.html">Sortable & Nestable</a>
                                        </li>
                                        <li>
                                            <a href="pages/ui/tabs.html">Tabs</a>
                                        </li>
                                        <li>
                                            <a href="pages/ui/thumbnails.html">Thumbnails</a>
                                        </li>
                                        <li>
                                            <a href="pages/ui/tooltips-popovers.html">Tooltips & Popovers</a>
                                        </li>
                                        <li>
                                            <a href="pages/ui/waves.html">Waves</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="javascript:void(0);" className="menu-toggle">
                                        <i className="material-icons">assignment</i>
                                        <span>Forms</span>
                                    </a>
                                    <ul className="ml-menu">
                                        <li>
                                            <a href="pages/forms/basic-form-elements.html">Basic Form Elements</a>
                                        </li>
                                        <li>
                                            <a href="pages/forms/advanced-form-elements.html">Advanced Form Elements</a>
                                        </li>
                                        <li>
                                            <a href="pages/forms/form-examples.html">Form Examples</a>
                                        </li>
                                        <li>
                                            <a href="pages/forms/form-validation.html">Form Validation</a>
                                        </li>
                                        <li>
                                            <a href="pages/forms/form-wizard.html">Form Wizard</a>
                                        </li>
                                        <li>
                                            <a href="pages/forms/editors.html">Editors</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="javascript:void(0);" className="menu-toggle">
                                        <i className="material-icons">view_list</i>
                                        <span>Tables</span>
                                    </a>
                                    <ul className="ml-menu">
                                        <li>
                                            <a href="pages/tables/normal-tables.html">Normal Tables</a>
                                        </li>
                                        <li>
                                            <a href="pages/tables/jquery-datatable.html">Jquery Datatables</a>
                                        </li>
                                        <li>
                                            <a href="pages/tables/editable-table.html">Editable Tables</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="javascript:void(0);" className="menu-toggle">
                                        <i className="material-icons">perm_media</i>
                                        <span>Medias</span>
                                    </a>
                                    <ul className="ml-menu">
                                        <li>
                                            <a href="pages/medias/image-gallery.html">Image Gallery</a>
                                        </li>
                                        <li>
                                            <a href="pages/medias/carousel.html">Carousel</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="javascript:void(0);" className="menu-toggle">
                                        <i className="material-icons">pie_chart</i>
                                        <span>Charts</span>
                                    </a>
                                    <ul className="ml-menu">
                                        <li>
                                            <a href="pages/charts/morris.html">Morris</a>
                                        </li>
                                        <li>
                                            <a href="pages/charts/flot.html">Flot</a>
                                        </li>
                                        <li>
                                            <a href="pages/charts/chartjs.html">ChartJS</a>
                                        </li>
                                        <li>
                                            <a href="pages/charts/sparkline.html">Sparkline</a>
                                        </li>
                                        <li>
                                            <a href="pages/charts/jquery-knob.html">Jquery Knob</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="javascript:void(0);" className="menu-toggle">
                                        <i className="material-icons">content_copy</i>
                                        <span>Example Pages</span>
                                    </a>
                                    <ul className="ml-menu">
                                        <li>
                                            <a href="pages/examples/profile.html">Profile</a>
                                        </li>
                                        <li>
                                            <a href="pages/examples/sign-in.html">Sign In</a>
                                        </li>
                                        <li>
                                            <a href="pages/examples/sign-up.html">Sign Up</a>
                                        </li>
                                        <li>
                                            <a href="pages/examples/forgot-password.html">Forgot Password</a>
                                        </li>
                                        <li>
                                            <a href="pages/examples/blank.html">Blank Page</a>
                                        </li>
                                        <li>
                                            <a href="pages/examples/404.html">404 - Not Found</a>
                                        </li>
                                        <li>
                                            <a href="pages/examples/500.html">500 - Server Error</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="javascript:void(0);" className="menu-toggle">
                                        <i className="material-icons">map</i>
                                        <span>Maps</span>
                                    </a>
                                    <ul className="ml-menu">
                                        <li>
                                            <a href="pages/maps/google.html">Google Map</a>
                                        </li>
                                        <li>
                                            <a href="pages/maps/yandex.html">YandexMap</a>
                                        </li>
                                        <li>
                                            <a href="pages/maps/jvectormap.html">jVectorMap</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="javascript:void(0);" className="menu-toggle">
                                        <i className="material-icons">trending_down</i>
                                        <span>Multi Level Menu</span>
                                    </a>
                                    <ul className="ml-menu">
                                        <li>
                                            <a href="javascript:void(0);">
                                                <span>Menu Item</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);">
                                                <span>Menu Item - 2</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);" className="menu-toggle">
                                                <span>Level - 2</span>
                                            </a>
                                            <ul className="ml-menu">
                                                <li>
                                                    <a href="javascript:void(0);">
                                                        <span>Menu Item</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);" className="menu-toggle">
                                                        <span>Level - 3</span>
                                                    </a>
                                                    <ul className="ml-menu">
                                                        <li>
                                                            <a href="javascript:void(0);">
                                                                <span>Level - 4</span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="pages/changelogs.html">
                                        <i className="material-icons">update</i>
                                        <span>Changelogs</span>
                                    </a>
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