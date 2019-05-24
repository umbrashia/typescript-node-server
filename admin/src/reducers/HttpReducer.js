const apiLinks = { admin_login: "api/admin/adminLogin" }


export default function reducer(state = {
    fetching: false,
    fetched: false,
    error: false,
    message: null,
    token: null,
    dashboardAccess: false,
}, action) {
    switch (action.type) {
        case "doFetching": {
            return { ...state, fetching: true, message: action.payload.message };
        }
        case "setFetching": {
            return { ...state, fetching: action.payload };
        }
        case "onLogin": {
            return { ...state, token: action.payload.token, dashboardAccess: true };
        }
        default: {
            return state;
        }
    }

}