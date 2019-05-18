import * as express from "express";
import * as bodyparser from "body-parser";
import * as jsonwebtoken from "jsonwebtoken";
import { HttpSystem } from "./Application/helpers";
import { HomeController } from "./Application/controllers";

process.env.SECURE_KEY = "umbrashia_corporation";



let app = express();
let secureApp = express.Router();

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json({ type: 'text/plain' }))

//app.use(bodyparser.json());
app.use("/secure", secureApp);
secureApp.use((Request, Responce, NextFunction) => {
    let token: string = Request.body.token || Request.headers['token'];
    if (token)
        jsonwebtoken.verify(token, process.env.SECURE_KEY, (JsonWebTokenError, DecodeOptions) => {
            if (JsonWebTokenError)
                Responce.status(500).json({ mess: "bad token" });
            else
                NextFunction();
        })
    else
        Responce.json({ status: "000", mess: "unauthorise access with no token" });
});


secureApp.all("/api/:module/:subModule?/:subSubModule?", (Request, Response) => {
    Response.setHeader('Content-Type', 'text/plain');

});
//testing purpose
app.get('/', (req, res) => res.send('hiii'));
//testing purpose
app.get("/homeapi", (Request, Response) => { Response.json({ mess: "success", status: "200" }); });

app.all("/api/:module/:subModule?/:subSubModule?", (request: express.Request, response: express.Response) => {
    response.setHeader('Content-Type', 'text/plain');
    let httpSystem = new HttpSystem();
    httpSystem.sysHttpRequest = request;
    httpSystem.sysHttpResponse = response;
    //HttpSystem.Jsonwebtoken=jsonwebtoken;
    switch (request.params.module) {
        case "Home":
            new HomeController(httpSystem);
            break;
    }
});

app.listen(4000, async () => {
    console.log("Server is started....... at 4000 ......"+new Date());
    try {

        let a: number, b: number = 1010;
        let c: number = a + b;
        c *= c;
        // let connection:Mongoose=await appMongo.connect("mongodb://localhost:27017/stickflash",{ useNewUrlParser: true });



    } catch (error) {

        console.log(error);

    }

});