import Axios from "axios";
import { setDashboardProgress } from "../actions/AdminAction";

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
            response = await Axios.post(this.props.HttpReducer.baseurl+apiLink, data, { headers: { token: this.props.HttpReducer.token, ...this._localHeaders } });
            // if (quickNotification)
            //     if (response.data.status)
            //         window.showNotification("success","bg-light-green", response.data.message, "top", "right", "animated rotateInDownRight", "animated rotateOutDownRight");
            //     else
            //         window.showNotification("warning","alert-warning", response.data.message, "top", "right", "animated rotateInDownRight", "animated rotateOutDownRight");
            //return response.data;
        } catch (error) {
            window.showNotification("error" ,"alert-danger", "Sorry. Looks like something went wrong on over end.", "top", "right", "animated rotateInDownRight", "animated rotateOutDownRight");
            console.log(error);
        } finally {
            this.props.dispatch(setDashboardProgress(false));
            if (response)
                return response.data;
            else
                return null;
        }
    }
}