// import { Link } from 'react-router-dom'
import React, { Component } from 'react';
import { connect } from 'react-redux';
// import HttpRequestResponse from '../helpers/HttpRequestResponse';

export default connect((state) => {
    return { HttpReducer: state.HttpReducer, HelperReducer: state.HelperReducer };
})(class ManageFilter extends Component {

    constructor(props) {
        super(props);
        this.state = { formData: {} };
    }

    componentDidMount() {
        document.body.className = "theme-red";
        setTimeout(window.admincall, 100);
        setTimeout(window.demoCall, 10);
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
                                    <form className="" onSubmit={this.onSubmitForm.bind(this)}>

                                        <div className="row clearfix">
                                            <div className="col-md-6">
                                                <div className="form-group form-float">
                                                    <div className="form-line">
                                                        <input type="text" onChange={this.handleOnChange.bind(this)} className="form-control" name="filterTitle" required />
                                                        <label className="form-label">Title</label>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="form-group form-float">
                                                    <div className="form-line">
                                                        <input type="text" onChange={this.handleOnChange.bind(this)} className="form-control" name="filterValue" required />
                                                        <label className="form-label">Value</label>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="form-group form-float">
                                                    <div className="form-line">
                                                        <select onChange={this.handleOnChange.bind(this)} className="form-control" name="filterStatus" required>
                                                            <option value="">Please select</option>
                                                            {this.props.HelperReducer.filterStatus.map(value => {
                                                                return <option value={value}>{value.toUpperCase()}</option>
                                                            })}
                                                        </select>
                                                        <label className="form-label">Status</label>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="form-group form-float">
                                                    <div className="form-line">
                                                        <input type="text" onChange={this.handleOnChange.bind(this)} className="form-control" name="filterDescription" required />
                                                        <label className="form-label">Description</label>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="form-group form-float">
                                                    <div className="form-line">
                                                        <select onChange={this.handleOnChange.bind(this)} className="form-control" name="filtersFeature" required>
                                                            <option value="">Please select</option>
                                                            {this.props.HelperReducer.filterStatus.map(value => {
                                                                return <option value={value}>{value.toUpperCase()}</option>
                                                            })}
                                                        </select>
                                                        <label className="form-label">Feature</label>
                                                    </div>
                                                </div>
                                            </div>



                                        </div>

                                        <div className="row clearfix">
                                            <div className="col-md-12 text-center">
                                                <button type="submit" className="btn bg-orange waves-effect">
                                                    <i className="material-icons">save</i>
                                                    <span>SAVE</span>
                                                </button>
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