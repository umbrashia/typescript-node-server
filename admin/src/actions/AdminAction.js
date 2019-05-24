

export function doLogin(newToken){
    return {
        type:"onLogin",
        payload:{
            token:newToken
        },
    };
}

export function setDashboardProgress(status){
    return {
        type:"setFetching",
        payload:status
    };
}