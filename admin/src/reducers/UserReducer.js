export default function reducer(state = {
    fllData:{},
    adminId:null
}, action) {
    switch (action.type) {
        case "doLogin": {
            return { ...state };
        }
        case "doneFetching": {
            return { ...state, fetching: false, ...action.payload };
        }
        case "onError": {

        }
        default: {
            return state;
        }
    }

}