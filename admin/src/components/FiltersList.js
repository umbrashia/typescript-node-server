import { Link } from 'react-router-dom'
import React, { Component } from 'react';
import { connect } from 'react-redux';
import HttpRequestResponse from '../helpers/HttpRequestResponse';

export default connect((state) => {
    return { HttpReducer: state.HttpReducer };
})(class FilterList extends Component {



    constructor(props) {
        super(props);
        // alert("sdsd")
        this.state = { filterListData: [] ,type:""};
    }

    async showList(type) {
        let data = await new HttpRequestResponse(this.props).doJsonBodyRequest("api/admin/getFilters", { filterType: type }, true);
        this.setState({ filterListData: data.data.filterData, type:type});
    }



    async componentDidMount() {
        document.body.className = "theme-red";
        await this.showList( this.props.match.params.filterType);
        window.setDatatable('.js-basic-example', { responsive: true });
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
                                                    <li><Link to={{ pathname: '/managefilter/'+this.state.type, state: { filterType: this.state.type , title: "CMS Page" } }} >Add New</Link></li>
                                                    
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="body">
                                        <div className="table-responsive">
                                            <table className="table table-bordered table-striped table-hover js-basic-example dataTable">
                                                <thead>
                                                    <tr>
                                                        <th>Name</th>
                                                        <th>Position</th>
                                                        <th>Office</th>
                                                        <th>Age</th>
                                                        <th>Start date</th>
                                                        <th>Salary</th>
                                                    </tr>
                                                </thead>

                                                <tbody>


                                                    {this.state.filterListData.map(data => {
                                                        return <tr>
                                                            <td>Tiger Nixon</td>
                                                            <td>System Architect</td>
                                                            <td>Edinburgh</td>
                                                            <td>61</td>
                                                            <td>2011/04/25</td>
                                                            <td>$320,800</td>
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
