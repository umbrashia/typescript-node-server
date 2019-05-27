// import { Link } from 'react-router-dom'
import React, { Component } from 'react';
import { connect } from 'react-redux';
// import HttpRequestResponse from '../helpers/HttpRequestResponse';

export default connect((state) => {
    return { HttpReducer: state.HttpReducer };
})(class ManageFilter extends Component {

    constructor(props) {
        super(props);
        this.state = { formData: {} };
    }

    componentDidMount() {
        document.body.className = "theme-red";
    }

    onSubmitForm(e) {
        e.preventDefault();
        console.log(this.state);
    }

    handleOnChange = (e) => {
        const { value, name } = e.target
        console.log(e.target);

        this.setState({ formData: { ...this.state.formData, [name]: value.trim() } })
    }

    render() {
        return (
            <section className="content">
                <div className="container-fluid">
                    <div className="block-header">
                        {/* <h2>Add/Edit Filter ({this.props.match.params.filterType.toUpperCase()}) </h2> */}
                    </div>
                    <div className="row clearfix">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="card">
                                <div className="header">
                                    <h2>
                                        Add/Edit Filter
                                    <small>
                                            {this.props.match.params.filterType.toUpperCase()}
                                        </small>
                                    </h2>
                                </div>
                                <div className="body">
                                    <form className="form-horizontal" onSubmit={this.onSubmitForm.bind(this)}>
                                        {/* input element */}
                                        <div className="row clearfix">
                                            <div className="col-lg-2 col-md-2 col-sm-4 col-xs-5 form-control-label">
                                                <label>Title</label>
                                            </div>
                                            <div className="col-lg-10 col-md-10 col-sm-8 col-xs-7">
                                                <div className="form-group">
                                                    <div className="form-line">
                                                        <input type="text" onChange={this.handleOnChange.bind(this)} className="form-control" name="filterTitle" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* input element */}
                                        <div className="row clearfix">
                                            <div className="col-lg-2 col-md-2 col-sm-4 col-xs-5 form-control-label">
                                                <label>Value</label>
                                            </div>
                                            <div className="col-lg-10 col-md-10 col-sm-8 col-xs-7">
                                                <div className="form-group">
                                                    <div className="form-line">
                                                        <input type="text" onChange={this.handleOnChange.bind(this)} className="form-control" name="filterValue" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* input element */}
                                        <div className="row clearfix">
                                            <div className="col-lg-2 col-md-2 col-sm-4 col-xs-5 form-control-label">
                                                <label>Status</label>
                                            </div>
                                            <div className="col-lg-10 col-md-10 col-sm-8 col-xs-7">
                                                <div className="form-group">
                                                    <div className="form-line">
                                                        <input type="text" onChange={this.handleOnChange.bind(this)} className="form-control" name="filterStatus" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* input element */}
                                        <div className="row clearfix">
                                            <div className="col-lg-2 col-md-2 col-sm-4 col-xs-5 form-control-label">
                                                <label>Description</label>
                                            </div>
                                            <div className="col-lg-10 col-md-10 col-sm-8 col-xs-7">
                                                <div className="form-group">
                                                    <div className="form-line">
                                                        <input type="text" onChange={this.handleOnChange.bind(this)} className="form-control" name="filterDescription" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* input element */}
                                        <div className="row clearfix">
                                            <div className="col-lg-2 col-md-2 col-sm-4 col-xs-5 form-control-label">
                                                <label>Feature</label>
                                            </div>
                                            <div className="col-lg-10 col-md-10 col-sm-8 col-xs-7">
                                                <div className="form-group">
                                                    <div className="form-line">
                                                        <input type="text" onChange={this.handleOnChange.bind(this)} className="form-control" name="filtersFeature" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row clearfix">
                                            <div className="col-lg-offset-2 col-md-offset-2 col-sm-offset-4 col-xs-offset-5">
                                                <button type="submit" className="btn btn-primary m-t-15 waves-effect">LOGIN</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

});