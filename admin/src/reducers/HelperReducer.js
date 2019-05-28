export default function reducer(state = {
    filterStatus: ["show", "hide"]
}, action) {
    switch (action.type) {
        case "noaction": {
            return { ...state};
        }
        default: {
            return state;
        }
    }

}