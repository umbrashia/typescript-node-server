import { Link } from 'react-router-dom'
import React, { Component } from 'react';
import { connect } from 'react-redux';
import HttpRequestResponse from '../helpers/HttpRequestResponse';
import  $ from 'jquery';
// import   '../../public/plugins/jquery-datatable/jquery.dataTables.js';

export default connect((state) => {
    return { HttpReducer: state.HttpReducer };
})(class FilterList extends Component {



    constructor(props) {
        super(props);
        // alert("sdsd")
        this.state = { filterListData: [], type: "" };   
    }

    async showList(type) {
        let data = await new HttpRequestResponse(this.props).doJsonBodyRequest("api/admin/getFilters", { filterType: type }, true);
        await this.setState({ filterListData: data.data.filterData, type: type });
       
        //this.$el.DataTable({ responsive: true });
       //$(ele).DataTable(dataObj);
       
// window.setDatatable('.js-basic-example', { "destroy": true });
        // window.setDatatable('.js-basic-example', { responsive: true });
    }



    async componentDidMount() {
        document.body.className = "theme-red";
        this.$el = $(".js-basic-example");
        await this.showList(this.props.match.params.filterType);
        
    }

    async componentDidUpdate(pevProps) {
        if (this.props.location.state && pevProps.location.state) {
            if (this.props.location.state.filterType !== pevProps.location.state.filterType) {
                
                await this.showList(this.props.location.state.filterType);
                
            }
        }
    }

    async componentWillMount() {
        // document.body.className="theme-red";
        //  window.setDatatable('.js-basic-example',{responsive: true});
        // $('.js-basic-example').DataTable();
    }

    render() {
        console.log(this.state);
        return (
            <div>
                <section className="content">
                    <div className="container-fluid">
                        <div className="block-header">
                            <h2>
                                Filter {this.state.type}
                                <small></small>
                            </h2>
                        </div>

                        <div className="row clearfix">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div className="card">
                                    <div className="header">
                                        <h2>BASIC EXAMPLE</h2>
                                        <ul className="header-dropdown m-r--5">
                                            <li className="dropdown">
                                                <Link className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                                    <i className="material-icons">more_vert</i>
                                                </Link>
                                                <ul className="dropdown-menu pull-right">
                                                    <li><Link to={{ pathname: '/managefilter/' + this.state.type, state: { filterType: this.state.type, title: "CMS Page" } }} >Add New</Link></li>

                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="body">
                                        <div className="table-responsive">
                                            <table className="table table-bordered table-striped table-hover js-basic-example dataTable">
                                                <thead>
                                                    <tr>
                                                        <th>S.No</th>
                                                        <th>Title</th>
                                                        <th>Value</th>
                                                        <th>Feature</th>
                                                        <th>Status</th>
                                                        <th>File</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>

                                                <tbody>


                                                    {this.state.filterListData.map((data, index) => {
                                                        return <tr>
                                                            <td>{++index}</td>
                                                            <td>{data.filterTitle}</td>
                                                            <td>{data.filterValue}</td>
                                                            <td>{data.filtersFeature}</td>
                                                            <td>{data.filterStatus}</td>
                                                            <td>{data.filterFiles.length > 0 &&
                                                                <img src={this.props.HttpReducer.staticurl + data.filterFiles[0].name} height="50" />
                                                            }</td>
                                                            <td><Link to="#">Edit</Link></td>
                                                        </tr>;
                                                    })}

                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }

});
