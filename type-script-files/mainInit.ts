import * as express from "express";
import * as bodyparser from "body-parser";
import * as jsonwebtoken from "jsonwebtoken";
import { HttpSystem, mongoose, fileUpload } from "./Application/helpers";
import { HomeController } from "./Application/controllers";
import * as cors from 'cors';
import routes from './Application/routes'

mongoose.connect('mongodb://localhost:27017/stickflash', { useNewUrlParser: true, useCreateIndex: true, });
process.env.SECURE_KEY = "YEFBCISDXNYS";
process.env.STATIC_PATH = "./uploads/";

let app = express();
// let secureApp = express.Router();
app.use('/static', express.static('uploads'))
app.use(fileUpload())
app.use(cors({ origin: "*", methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', }))
// app.use(bodyparser.urlencoded({ extended: true }));//for API enable
// app.use(bodyparser.json({ type: 'application/json' }));//for API enable
// app.get('/', (req, res) => res.send('hiii'));
app.use(routes as any);


app.listen(4000, async () => {
    console.log("Server is started at 4000 Port ...... " + new Date());
});