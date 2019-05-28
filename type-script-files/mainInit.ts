import * as express from "express";
import * as bodyparser from "body-parser";
import * as jsonwebtoken from "jsonwebtoken";
import { HttpSystem, mongoose,fileUpload } from "./Application/helpers";
import { HomeController } from "./Application/controllers";
import * as bcrypt from 'bcrypt';
import * as cors from 'cors';


// var upload:express.RequestHandler=multer({dest:"uploads/"}).array("files");

mongoose.connect('mongodb://localhost:27017/stickflash', { useNewUrlParser: true, useCreateIndex: true, });

process.env.SECURE_KEY = "YEFBCISDXNYS";

let app = express();
let secureApp = express.Router();
app.use(fileUpload())
app.use(cors())
app.use(bodyparser.urlencoded({ extended: true}));
app.use(bodyparser.json({ type: 'application/json' }))

app.use("/secure", secureApp);
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
app.get('/', (req, res) => res.send('hiii'));

//ordnary or open routes...
app.all("/api/:module/:subModule?/:subSubModule?", (request: express.Request, response: express.Response) => {
    response.setHeader('Content-Type', 'text/plain');
    let httpSystem = new HttpSystem();
    httpSystem.sysHttpRequest = request;
    httpSystem.sysHttpResponse = response;
    //HttpSystem.Jsonwebtoken=jsonwebtoken;
    switch (request.params.module) {
        case "admin":
            new HomeController(httpSystem).internalRouting();
            break;
    }
});

app.listen(4000, async () => {
    console.log("Server is started at 4000 Port ...... " + new Date());
    try {
        let data = await bcrypt.hash("123456", 10);
        console.log(data);
    } catch (error) {

        console.log(error);

    }

});