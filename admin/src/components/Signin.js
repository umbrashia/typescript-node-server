import React, { Component } from 'react';
import { connect } from 'react-redux'
import { doLogin } from '../actions/AdminAction';
import HttpRequestResponse from '../helpers/HttpRequestResponse';

export default connect((state) => {
    return { HttpReducer: state.HttpReducer };
})(class Signin extends Component {

    constructor() {
        super();
        this.state = { userName: "", password: "" };
    }

    async handleSubmit(event) {
        event.preventDefault();

        let response = await new HttpRequestResponse(this.props).doJsonBodyRequest("api/admin/adminLogin",
            { userName: this.refs.userName.value, password: this.refs.password.value }, true)
        if (response)
            if (response.status){
                localStorage.setItem("token",response.data.token);
                this.props.dispatch(doLogin(response.data.token));
            }

//{this.props.HttpReducer.token}
    }

    render() {
        document.body.className = "login-page";

        return (
            <div className="login-box">
                <div className="logo">
                    <a href="/">Admin<b>Olives</b></a>
                    <small>Admin BootStrap Based - Material Design</small>
                </div>
                <div className="card">
                    <div className="body">
                        <form method="POST" onSubmit={this.handleSubmit.bind(this)}>
                            <div className="msg">Sign in to start your session</div>
                            <div className="input-group">
                                <span className="input-group-addon">
                                    <i className="material-icons">person</i>
                                </span>
                                <div className="form-line">
                                    <input type="text" ref="userName" className="form-control" name="username" placeholder="Username" required autofocus />
                                </div>
                            </div>
                            <div className="input-group">
                                <span className="input-group-addon">
                                    <i className="material-icons">lock</i>
                                </span>
                                <div className="form-line">
                                    <input type="password" ref="password" className="form-control" name="password" placeholder="Password" required />
                                </div>
                            </div>
                            <div className="row">

                                <div className="col-xs-4">
                                    <button className="btn btn-block bg-pink waves-effect" type="submit">SIGN IN</button>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        );
    }

});