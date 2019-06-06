import React, { Component, Fragment } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { renderTextField, Button } from '../../helpers/FormsInputs';
import HttpRequestResponse from '../../helpers/HttpRequestResponse';
import { doLogin, setDashboardProgress } from '../../actions/AdminAction';
import { enqueueSnackbar, closeSnackbar } from '../../actions/NotificationAction';
import { Notification } from '../../includes';



const mapDispatchToProps = dispatch => bindActionCreators({
    enqueueSnackbar,
    closeSnackbar,
}, dispatch);
export default reduxForm({
    form: "loginAdminForm",

})(connect((state) => {
    return {
        HttpReducer: state.HttpReducer,
        NotificationReducer: state.NotificationReducer,
    };
}, mapDispatchToProps)(

    class LoginForm extends Component {

        constructor(props) {
            super(props)
        }

        async handleLoginSubmit(value) {
            console.log(value);
            this.props.dispatch(setDashboardProgress(false));

            // return 1;
            let response = await new HttpRequestResponse(this.props).doJsonBodyRequest("api/admin/adminLogin",value, true)
            if (response)
                if (response.status) {
                    localStorage.setItem("token", response.data.token);
                    //alert("asasa");
                    this.props.dispatch(doLogin(response.data.token));
                }
        }

        render() {
            const { classes, handleSubmit } = this.props;
            return (
                <div>


                    <form onSubmit={handleSubmit(this.handleLoginSubmit.bind(this))}>
                        <Field component={renderTextField} fullWidth type="text" name="userName" label="User Name" />
                        <Field component={renderTextField} fullWidth type="password" name="password" label="Password" />
                        <Button type="submit" variant="contained" fullWidth className={classes.submit} color="primary">Primary</Button>
                    </form>

                </div>
            );
        }

    }
));