export default function reducer(state = {
    fetching: false,
    fetched: false,
    error: false,
    message: null,
    token: null,
    dashboardAccess:false,
}, action) {
    switch (action.type) {
        case "doFetching": {
            return { ...state, fetching: true, message: action.payload.message };
        }
        case "doneFetching": {
            return { ...state, fetching: false, ...action.payload };
        }
        case "onLogin": {
            return { ...state, token: action.payload.token };
        }
        default: {
            return state;
        }
    }

}