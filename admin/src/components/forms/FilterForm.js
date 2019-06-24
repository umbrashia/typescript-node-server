import React, { Component, Fragment } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { renderTextField, Button } from '../../helpers/FormsInputs';
import HttpRequestResponse from '../../helpers/HttpRequestResponse';
import { doLogin, setDashboardProgress } from '../../actions/AdminAction';
import { enqueueSnackbar, closeSnackbar } from '../../actions/NotificationAction';
import { Grid } from '@material-ui/core';



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
                    <Grid container spacing={8}>

                        <Grid item sm={6} xs={12}>
                            <Field component={renderTextField} fullWidth type="text" name="filterTitle" label="Title" />
                        </Grid>
                        <Grid item sm={6} xs={12}>
                            <Field component={renderTextField} fullWidth type="text" name="filterValue" label="Value" />
                        </Grid>
                        <Grid item sm={6} xs={12}>
                            <Field component={renderTextField} fullWidth multiline rowsMax="4"
                                type="text" name="filterDescription" label="Description" />
                        </Grid>
                        <Grid item sm={6} xs={12}>

                        </Grid>
                    </Grid>
                </form>
            </Fragment>
        );
    }

}
));