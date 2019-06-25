import * as express from "express";
let app = express.Router();


app.get('/', (req, res) => res.send('hiii'));


export default app;

//depcrited-------------------------------------------
/*app.use("/secure", secureApp);
secureApp.use((request: express.Request, response: express.Response, NextFunction: express.NextFunction) => {
    let token: string = request.body.token || request.headers['token'];
    if (token)
        jsonwebtoken.verify(token, process.env.SECURE_KEY, (JsonWebTokenError, DecodeOptions) => {
            if (JsonWebTokenError)
                response.status(401).json({ status: false, message: "unauthorise access with bad token", data: {} });
            else
                NextFunction()
        })
    else
        response.status(401).json({ status: false, message: "unauthorise access with no token", data: {} });
});


secureApp.all("/api/:module/:subModule?/:subSubModule?", (request: express.Request, response: express.Response) => {
    response.setHeader('Content-Type', 'text/plain');
    let httpSystem = new HttpSystem();
    httpSystem.sysHttpRequest = request;
    httpSystem.sysHttpResponse = response;
    //HttpSystem.Jsonwebtoken=jsonwebtoken;
    switch (request.params.module) {
        case "admin":
            new HomeController(httpSystem).secureInternalRouting();
            break;
    }
});
//testing purpose
//  app.get('/', (req, res) => res.send('hiii'));



//ordnary or open routes...
// app.all("/api/:module/:subModule?/:subSubModule?", (request: express.Request, response: express.Response) => {
app.all("/api/:module/:subModule?/:subSubModule?", (request: express.Request, response: express.Response) => {
    response.setHeader('Content-Type', 'text/plain');
    let httpSystem = new HttpSystem();
    httpSystem.sysHttpRequest = request;
    httpSystem.sysHttpResponse = response;
    switch (request.params.module) {
        case "admin":
            new HomeController(httpSystem).internalRouting();
            break;
    }
});*/