// import { Link } from 'react-router-dom'
import React, { Component } from 'react';
import { connect } from 'react-redux';
import HttpRequestResponse from '../helpers/HttpRequestResponse';
import { Editor } from '@tinymce/tinymce-react';
import { reduxForm, Field } from 'redux-form';



// use with Redux Form

export default reduxForm({
    form: 'filterSubmit',
    initialValues:{filterDescription:""}
})(connect((state) => {
    return { HttpReducer: state.HttpReducer, HelperReducer: state.HelperReducer };
})(
    class SubmitFilterForm extends Component {

        constructor(props) {
            super(props);
            this.state = { formData: { filterType: this.props.match.params.filterType }, files: [] };
        }

        componentDidMount() {
            document.body.className = "theme-red";
            setTimeout(window.admincall, 100);
            setTimeout(window.demoCall, 10);
        }

        async onSubmitForm(e) {

            e.preventDefault();

            let temp = { ...this.state.formData, filterFiles: this.state.files };
            await this.setState({ ...this.state, formData: { ...this.state.formData, filterFiles: this.state.files } })
            console.log(this.state.formData);
            var response = await new HttpRequestResponse(this.props).doJsonBodyRequest("secure/api/admin/savefilter", this.state.formData, true);

        }

        handleOnChange = (e) => {
            const { value, name } = e.target
            console.log(e.target);

            this.setState({ formData: { ...this.state.formData, [name]: value.trim() } })
        }

        async handleUploadFile(e) {
            if (e.target.files.length > 0) {
                console.log(e.target.files);
                const data = new FormData();
                for (let index = 0; index < e.target.files.length; index++) {
                    data.append(`files`, e.target.files[index]);
                }
                data.append("filterType", this.props.match.params.filterType)
                var response = await new HttpRequestResponse(this.props).doJsonBodyRequest("api/admin/uploadGlobalFiles", data, true);
                this.setState({ ...this.state, files: response.data.uploadedPaths });
            }
        }

        async handleRemoveFilterFile(index, e) {
            if (window.confirm("Are you sure?")) {
                var response = await new HttpRequestResponse(this.props).doJsonBodyRequest("secure/api/admin/filterFileRemove", { path: e.target.value }, true);
                let temp = this.state.files;
                temp.splice(index, 1);
                this.setState({ ...this.state, files: temp });
            }
        }

        handleEditorChange = (e) => {
            console.log('Content was updated:', e.target.getContent());
            this.setState({ formData: { ...this.state.formData, filterDescription: e.target.getContent() } })
        }


        render() {
            const { handleSubmit } = this.props;



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
                                        <form className="" onSubmit={handleSubmit((value) => {
                                            console.log(value);

                                        })} >

                                            <div className="row clearfix">
                                                <div className="col-md-6">
                                                    <label className="form-label">Title</label>
                                                    <div className="form-group ">
                                                        <div className="form-line">
                                                            <Field name="filterTitle" className="form-control" required component="input" type="text" />
                                                            {/* <input type="text" onChange={this.handleOnChange.bind(this)}  name="filterTitle" required /> */}

                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-md-6">
                                                    <label className="form-label">Value</label>
                                                    <div className="form-group ">
                                                        <div className="form-line">
                                                            <Field name="filterValue" className="form-control" required component="input" type="text" />
                                                            {/* <input type="text" onChange={this.handleOnChange.bind(this)} className="form-control" 
                                                        name="filterValue" required /> */}

                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-md-6">
                                                    <label className="form-label">Status</label>
                                                    <div className="form-group ">
                                                        <div className="">
                                                            <Field className="form-control" name="filterStatus" component="select">
                                                                {this.props.HelperReducer.filterStatus.map(value => {
                                                                    return <option value={value}>{value.toUpperCase()}</option>
                                                                })}
                                                            </Field>
                                                            {/* <select onChange={this.handleOnChange.bind(this)} className="form-control" name="filterStatus" required>
                                                                <option value="">Please select</option>

                                                            </select> */}

                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-md-6">
                                                    <label className="form-label">Feature</label>
                                                    <div className="form-group ">
                                                        <div className="form-line">
                                                            <Field className="form-control" name="filtersFeature" component="select">
                                                                {this.props.HelperReducer.filterStatus.map((value, index) => {
                                                                    return <option value={value}>{value.toUpperCase()}</option>
                                                                })}
                                                            </Field>
                                                            {/* <select onChange={this.handleOnChange.bind(this)} className="form-control" name="filtersFeature" required>
                                                                <option value="">Please select</option>
                                                                {this.props.HelperReducer.filterStatus.map((value, index) => {
                                                                    return <option value={value}>{value.toUpperCase()}</option>
                                                                })}
                                                            </select> */}

                                                        </div>
                                                    </div>
                                                </div>


                                                <div className="col-md-12">
                                                    <label className="form-label">Description</label>
                                                    <div className="form-group ">
                                                        <div className="form-line">
                                                            {/* <textarea id="tinymce" name="filterDescription" onChange={this.handleOnChange.bind(this)}></textarea> */}
                                                            <Editor
                                                                initialValue={this.props.initialValues.filterDescription}
                                                                apiKey='6at11g1je6yh4ze77tu80trl1ykxnetcqis69ywd9e53svmf'
                                                                init={{
                                                                    plugins: 'advlist autolink lists link image charmap print preview hr anchor pagebreak' +
                                                                        ' searchreplace wordcount visualblocks visualchars code fullscreen ' +
                                                                        ' insertdatetime media nonbreaking save table contextmenu directionality' +
                                                                        ' emoticons template paste textcolor colorpicker textpattern imagetools',
                                                                    toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code'
                                                                }}
                                                                onChange={this.handleEditorChange.bind(this)}
                                                            />
                                                            {/* <input type="text" onChange={this.handleOnChange.bind(this)} className="form-control" name="filterDescription" required /> */}

                                                        </div>
                                                    </div>
                                                </div>


                                                <div className="col-md-12">
                                                    <b>Upload Files (Images)</b>
                                                    <div className="form-group">
                                                        <div className="form-line" id="bs_datepicker_container">
                                                            <input type="file" multiple className="form-label" onChange={this.handleUploadFile.bind(this)} />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-md-12">
                                                    <div class="row">
                                                        {this.state.files.map((value, index) => {
                                                            return (<div className="col-sm-6 col-md-3">
                                                                <div className="thumbnail">
                                                                    <img src={this.props.HttpReducer.staticurl + value.name} />
                                                                    <div className="caption text-center">

                                                                        <div class="btn-group" role="group">

                                                                            <button type="button" onClick={(e) => {
                                                                                navigator.clipboard.writeText(e.target.value)
                                                                                document.execCommand("copy");
                                                                            }} value={this.props.HttpReducer.staticurl + value.name} class="btn btn-primary waves-effect">Copy</button>
                                                                            <button type="button" label={index} value={value.name} onClick={this.handleRemoveFilterFile.bind(this, index)} class="btn btn-danger waves-effect">Remove</button>
                                                                        </div>


                                                                    </div>

                                                                </div>
                                                            </div>);

                                                        })}
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
    }
))


//pure component.....
const FilterData = connect((state) => {
    // export default connect((state) => {
    return { HttpReducer: state.HttpReducer, HelperReducer: state.HelperReducer };
})(class ManageFilter extends Component {

    constructor(props) {
        super(props);

        this.state = { formData: { filterType: this.props.match.params.filterType }, files: [] };
    }

    componentDidMount() {
        document.body.className = "theme-red";
        setTimeout(window.admincall, 100);
        setTimeout(window.demoCall, 10);
    }

    async onSubmitForm(e) {

        e.preventDefault();
        let temp = { ...this.state.formData, filterFiles: this.state.files };
        await this.setState({ ...this.state, formData: { ...this.state.formData, filterFiles: this.state.files } })
        console.log(this.state.formData);
        var response = await new HttpRequestResponse(this.props).doJsonBodyRequest("secure/api/admin/savefilter", this.state.formData, true);

    }

    handleOnChange = (e) => {
        const { value, name } = e.target
        console.log(e.target);
        this.setState({ formData: { ...this.state.formData, [name]: value.trim() } })
    }

    async handleUploadFile(e) {
        if (e.target.files.length > 0) {
            console.log(e.target.files);
            const data = new FormData();
            for (let index = 0; index < e.target.files.length; index++) {
                data.append(`files`, e.target.files[index]);
            }
            data.append("filterType", this.props.match.params.filterType)
            var response = await new HttpRequestResponse(this.props).doJsonBodyRequest("api/admin/uploadGlobalFiles", data, true);
            this.setState({ ...this.state, files: response.data.uploadedPaths });
        }
    }

    async handleRemoveFilterFile(index, e) {
        if (window.confirm("Are you sure?")) {
            var response = await new HttpRequestResponse(this.props).doJsonBodyRequest("secure/api/admin/filterFileRemove", { path: e.target.value }, true);
            let temp = this.state.files;
            temp.splice(index, 1);
            this.setState({ ...this.state, files: temp });
        }
    }

    handleEditorChange = (e) => {
        console.log('Content was updated:', e.target.getContent());
        this.setState({ formData: { ...this.state.formData, filterDescription: e.target.getContent() } })
    }

    AddFilterOLD() {
        return (<section className="content">
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
                                            <label className="form-label">Title</label>
                                            <div className="form-group ">
                                                <div className="form-line">
                                                    <input type="text" onChange={this.handleOnChange.bind(this)} className="form-control" name="filterTitle" required />

                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <label className="form-label">Value</label>
                                            <div className="form-group ">
                                                <div className="form-line">
                                                    <input type="text" onChange={this.handleOnChange.bind(this)} className="form-control" name="filterValue" required />

                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <label className="form-label">Status</label>
                                            <div className="form-group ">
                                                <div className="form-line">
                                                    <select onChange={this.handleOnChange.bind(this)} className="form-control" name="filterStatus" required>
                                                        <option value="">Please select</option>
                                                        {this.props.HelperReducer.filterStatus.map(value => {
                                                            return <option value={value}>{value.toUpperCase()}</option>
                                                        })}
                                                    </select>

                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <label className="form-label">Feature</label>
                                            <div className="form-group ">
                                                <div className="form-line">
                                                    <select onChange={this.handleOnChange.bind(this)} className="form-control" name="filtersFeature" required>
                                                        <option value="">Please select</option>
                                                        {this.props.HelperReducer.filterStatus.map((value, index) => {
                                                            return <option value={value}>{value.toUpperCase()}</option>
                                                        })}
                                                    </select>

                                                </div>
                                            </div>
                                        </div>


                                        <div className="col-md-12">
                                            <label className="form-label">Description</label>
                                            <div className="form-group ">
                                                <div className="form-line">
                                                    {/* <textarea id="tinymce" name="filterDescription" onChange={this.handleOnChange.bind(this)}></textarea> */}
                                                    <Editor
                                                        initialValue="<p>This is the initial content of the editor</p>"
                                                        apiKey='6at11g1je6yh4ze77tu80trl1ykxnetcqis69ywd9e53svmf'
                                                        init={{
                                                            plugins: 'advlist autolink lists link image charmap print preview hr anchor pagebreak' +
                                                                ' searchreplace wordcount visualblocks visualchars code fullscreen ' +
                                                                ' insertdatetime media nonbreaking save table contextmenu directionality' +
                                                                ' emoticons template paste textcolor colorpicker textpattern imagetools',
                                                            toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code'
                                                        }}
                                                        onChange={this.handleEditorChange.bind(this)}
                                                    />
                                                    {/* <input type="text" onChange={this.handleOnChange.bind(this)} className="form-control" name="filterDescription" required /> */}

                                                </div>
                                            </div>
                                        </div>


                                        <div className="col-md-12">
                                            <b>Upload Files (Images)</b>
                                            <div className="form-group">
                                                <div className="form-line" id="bs_datepicker_container">
                                                    <input type="file" multiple className="form-label" onChange={this.handleUploadFile.bind(this)} />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-12">
                                            <div class="row">
                                                {this.state.files.map((value, index) => {
                                                    return (<div className="col-sm-6 col-md-3">
                                                        <div className="thumbnail">
                                                            <img src={this.props.HttpReducer.staticurl + value.name} />
                                                            <div className="caption text-center">

                                                                <div class="btn-group" role="group">

                                                                    <button type="button" onClick={(e) => {
                                                                        navigator.clipboard.writeText(e.target.value)
                                                                        document.execCommand("copy");
                                                                    }} value={this.props.HttpReducer.staticurl + value.name} class="btn btn-primary waves-effect">Copy</button>
                                                                    <button type="button" label={index} value={value.name} onClick={this.handleRemoveFilterFile.bind(this, index)} class="btn btn-danger waves-effect">Remove</button>
                                                                </div>


                                                            </div>

                                                        </div>
                                                    </div>);

                                                })}
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
        </section>);
    }

    render() {

        return (
            <div>hello</div>
        );
    }

});