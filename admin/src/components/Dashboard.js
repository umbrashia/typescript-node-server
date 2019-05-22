import React, { Component } from 'react';
import  $ from 'jquery';



export default class Dashboard extends Component {
    async componentWillMount() {
        // window.admincall();
        // navigator.camera()
    }
    render() {
        return (
            <div>

                <section className="content">
                    <div className="container-fluid">
                        <div className="block-header">
                            <h2>DASHBOARD</h2>
                        </div>

                        <div className="row clearfix">
                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                <div className="info-box bg-pink hover-expand-effect">
                                    <div className="icon">
                                        <i className="material-icons">playlist_add_check</i>
                                    </div>
                                    <div className="content">
                                        <div className="text">NEW TASKS</div>
                                        <div className="number count-to" data-from="0" data-to="125" data-speed="15" data-fresh-interval="20"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                <div className="info-box bg-cyan hover-expand-effect">
                                    <div className="icon">
                                        <i className="material-icons">help</i>
                                    </div>
                                    <div className="content">
                                        <div className="text">NEW TICKETS</div>
                                        <div className="number count-to" data-from="0" data-to="257" data-speed="1000" data-fresh-interval="20"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                <div className="info-box bg-light-green hover-expand-effect">
                                    <div className="icon">
                                        <i className="material-icons">forum</i>
                                    </div>
                                    <div className="content">
                                        <div className="text">NEW COMMENTS</div>
                                        <div className="number count-to" data-from="0" data-to="243" data-speed="1000" data-fresh-interval="20"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                <div className="info-box bg-orange hover-expand-effect">
                                    <div className="icon">
                                        <i className="material-icons">person_add</i>
                                    </div>
                                    <div className="content">
                                        <div className="text">NEW VISITORS</div>
                                        <div className="number count-to" data-from="0" data-to="1225" data-speed="1000" data-fresh-interval="20"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row clearfix">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <div className="card">
                                    <div className="header">
                                        <div className="row clearfix">
                                            <div className="col-xs-12 col-sm-6">
                                                <h2>CPU USAGE (%)</h2>
                                            </div>
                                            <div className="col-xs-12 col-sm-6 align-right">
                                                <div className="switch panel-switch-btn">
                                                    <span className="m-r-10 font-12">REAL TIME</span>
                                                    <label>OFF<input type="checkbox" id="realtime" /><span className="lever switch-col-cyan"></span>ON</label>
                                                </div>
                                            </div>
                                        </div>
                                        <ul className="header-dropdown m-r--5">
                                            <li className="dropdown">
                                                <a href="javascript:void(0);" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                                    <i className="material-icons">more_vert</i>
                                                </a>
                                                <ul className="dropdown-menu pull-right">
                                                    <li><a href="javascript:void(0);">Action</a></li>
                                                    <li><a href="javascript:void(0);">Another action</a></li>
                                                    <li><a href="javascript:void(0);">Something else here</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="body">
                                        <div id="real_time_chart" className="dashboard-flot-chart"></div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="row clearfix">

                            <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                                <div className="card">
                                    <div className="header">
                                        <h2>TASK INFOS</h2>
                                        <ul className="header-dropdown m-r--5">
                                            <li className="dropdown">
                                                <a href="javascript:void(0);" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                                    <i className="material-icons">more_vert</i>
                                                </a>
                                                <ul className="dropdown-menu pull-right">
                                                    <li><a href="javascript:void(0);">Action</a></li>
                                                    <li><a href="javascript:void(0);">Another action</a></li>
                                                    <li><a href="javascript:void(0);">Something else here</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="body">
                                        <div className="table-responsive">
                                            <table className="table table-hover dashboard-task-infos">
                                                <thead>
                                                    <tr>
                                                        <th>#</th>
                                                        <th>Task</th>
                                                        <th>Status</th>
                                                        <th>Manager</th>
                                                        <th>Progress</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>Task A</td>
                                                        <td><span className="label bg-green">Doing</span></td>
                                                        <td>John Doe</td>
                                                        <td>
                                                            <div className="progress">
                                                                <div className="progress-bar bg-green" role="progressbar" aria-valuenow="62" aria-valuemin="0" aria-valuemax="100" style={{ width: '62%' }}></div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>2</td>
                                                        <td>Task B</td>
                                                        <td><span className="label bg-blue">To Do</span></td>
                                                        <td>John Doe</td>
                                                        <td>
                                                            <div className="progress">
                                                                <div className="progress-bar bg-blue" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{ width: '40%' }}></div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>3</td>
                                                        <td>Task C</td>
                                                        <td><span className="label bg-light-blue">On Hold</span></td>
                                                        <td>John Doe</td>
                                                        <td>
                                                            <div className="progress">
                                                                <div className="progress-bar bg-light-blue" role="progressbar" aria-valuenow="72" aria-valuemin="0" aria-valuemax="100" style={{ width: '72%' }}></div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>4</td>
                                                        <td>Task D</td>
                                                        <td><span className="label bg-orange">Wait Approvel</span></td>
                                                        <td>John Doe</td>
                                                        <td>
                                                            <div className="progress">
                                                                <div className="progress-bar bg-orange" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100" style={{ width: '95%' }}></div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>5</td>
                                                        <td>Task E</td>
                                                        <td>
                                                            <span className="label bg-red">Suspended</span>
                                                        </td>
                                                        <td>John Doe</td>
                                                        <td>
                                                            <div className="progress">
                                                                <div className="progress-bar bg-red" role="progressbar" aria-valuenow="87" aria-valuemin="0" aria-valuemax="100" style={{ width: '87%' }}></div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                <div className="card">
                                    <div className="header">
                                        <h2>BROWSER USAGE</h2>
                                        <ul className="header-dropdown m-r--5">
                                            <li className="dropdown">
                                                <a href="javascript:void(0);" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                                    <i className="material-icons">more_vert</i>
                                                </a>
                                                <ul className="dropdown-menu pull-right">
                                                    <li><a href="javascript:void(0);">Action</a></li>
                                                    <li><a href="javascript:void(0);">Another action</a></li>
                                                    <li><a href="javascript:void(0);">Something else here</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="body">
                                        <div id="donut_chart" className="dashboard-donut-chart"></div>
                                    </div>
                                </div>
                            </div>

                        </div>


                    </div>
                </section>


            </div>
        );
    }
}