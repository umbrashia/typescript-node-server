import React, { Component } from 'react';

export default class Signin extends Component {
    render() {
        document.body.className="login-page";
        return (
            <div className="login-box">
                <div className="logo">
                    <a >Admin<b>Olives</b></a>
                    <small>Admin BootStrap Based - Material Design</small>
                </div>
                <div className="card">
                    <div className="body">
                        <form id="sign_in" method="POST">
                            <div className="msg">Sign in to start your session</div>
                            <div className="input-group">
                                <span className="input-group-addon">
                                    <i className="material-icons">person</i>
                                </span>
                                <div className="form-line">
                                    <input type="text" className="form-control" name="username" placeholder="Username" required autofocus />
                                </div>
                            </div>
                            <div className="input-group">
                                <span className="input-group-addon">
                                    <i className="material-icons">lock</i>
                                </span>
                                <div className="form-line">
                                    <input type="password" className="form-control" name="password" placeholder="Password" required />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xs-8 p-t-5">
                                    <input type="checkbox" name="rememberme" id="rememberme" className="filled-in chk-col-pink" />
                                    <label for="rememberme">Remember Me</label>
                                </div>
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

}