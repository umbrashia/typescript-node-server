

export function doLogin(newToken){
    return {
        type:"onLogin",
        payload:{
            token:newToken
        },
    };
}