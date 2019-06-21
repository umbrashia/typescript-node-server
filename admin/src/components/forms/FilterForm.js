import React, { Component, Fragment } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { renderTextField, Button } from '../../helpers/FormsInputs';
import HttpRequestResponse from '../../helpers/HttpRequestResponse';
import { doLogin, setDashboardProgress } from '../../actions/AdminAction';
import { enqueueSnackbar, closeSnackbar } from '../../actions/NotificationAction';



export default reduxForm({
    form: "filterAdminForm"
})(connect((state) => {
    return {
        HttpReducer: state.HttpReducer,
        NotificationReducer: state.NotificationReducer,
    };
})(class FilterForm extends Component {

    render() {
        const { classes, handleSubmit } = this.props;
        return (
            <Fragment>
                <form onSubmit={handleSubmit}>
                    <Field component={renderTextField} fullWidth type="text" name="filterTitle" label="Title" />
                    <Field component={renderTextField} fullWidth type="text" name="filterValue" label="Value" />
                    <Field component={renderTextField} fullWidth multiline rowsMax="4" 
                    type="text" name="filterDescription" label="Description" />
                </form>
            </Fragment>
        );
    }

}
));