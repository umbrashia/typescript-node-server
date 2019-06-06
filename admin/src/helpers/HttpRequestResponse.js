import Axios from "axios";
import React from 'react';
import { setDashboardProgress } from "../actions/AdminAction";
import { Button } from "@material-ui/core";

export default class HttpRequestResponse {

    constructor(props) {
        this.props = props;
    }

    _localHeaders = {};

    get localHeaders() {
        return this._localHeaders;
    }
    set localHeaders(value) {
        this._localHeaders = value;
    }

    async doJsonBodyRequest(apiLink, data, quickNotification = false) {
        let response = null;
        try {
            this.props.dispatch(setDashboardProgress(true));
            response = await Axios.post(this.props.HttpReducer.baseurl + apiLink, data, { headers: { token: this.props.HttpReducer.token, ...this._localHeaders } });
            if (quickNotification)
                if (response.data.status)
                    this.props.enqueueSnackbar({
                        message: response.data.message,
                        options: {
                            key: new Date().getTime() + Math.random(),
                            variant: 'success',
                            action: key => (
                                <Button onClick={() => this.props.closeSnackbar(key)}>close</Button>
                            ),
                        },
                    });
                else
                    this.props.enqueueSnackbar({
                        message: response.data.message,
                        options: {
                            key: new Date().getTime() + Math.random(),
                            variant: 'warning',
                            action: key => (
                                <Button onClick={() => this.props.closeSnackbar(key)}>close</Button>
                            ),
                        },
                    });
            // return response.data;
        } catch (error) {
            this.props.enqueueSnackbar({
                message: "Sorry. Looks like something went wrong on over end.",
                options: {
                    key: new Date().getTime() + Math.random(),
                    variant: 'error',
                    action: key => (
                        <Button onClick={() => this.props.closeSnackbar(key)}>close</Button>
                    ),
                },
            });
            // window.showNotification("error", "alert-danger", "Sorry. Looks like something went wrong on over end.", "top", "right", "animated rotateInDownRight", "animated rotateOutDownRight");
            console.log("ERROR Form Server...",error);
        } finally {
            this.props.dispatch(setDashboardProgress(false));
            if (response)
                return response.data;
            else
                return null;
        }
    }
}