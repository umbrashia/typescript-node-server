import { IHomeController, IBaseController } from "../interfaces/controllers";
import { HttpSystem, bcrypt, crypto, jsonwebtoken } from "../helpers";
import { IAdmin, Admin } from "../models";

export default class HomeController extends HttpSystem implements IHomeController, IBaseController {

    constructor(httpSystem: HttpSystem) {
        super(httpSystem);
        //this.internalRouting();
    }

    secureInternalRouting(): void {
        switch (this.sysHttpRequest.params.subModule) {
            case "adminLogin":
                this.adminLogin();
                break;
            case "adminNew":
                this.adminNew();
                break;
            default:
                this.sysHttpResponse.send("ohhh wrongg....");
                break;
        }
    }

    internalRouting(): void {
        //subModule
        switch (this.sysHttpRequest.params.subModule) {
            case "adminLogin":
                this.adminLogin();
                break;
            case "adminNew":
                this.adminNew();
                break;
            default:
                this.sysHttpResponse.send("ohhh wrongg....");
                break;
        }
    }

    async adminNew() {
        try {
            const insert: IAdmin.RootObject & any = {
                name: "olive",
                userName: "admin",
                email: "shantanu@oliveglobal.com",
                password: await bcrypt.hash("123456", 10),
            };
            if (await new Admin(insert).save())
                this.sysHttpResponse.json({ status: "success", message: "successfully saved" })

        } catch (error) {
            console.log(error);
        }
    }


    async adminLogin() {
        try {
            let data = this.sysHttpRequest.body;
            data.password = crypto.createHash('md5').update(data.password).digest('hex');
            let adminData = await Admin.findOne(data);
            if (adminData) {
                adminData = { token: jsonwebtoken.sign({ _id: adminData.id }, process.env.SECURE_KEY, { expiresIn: 3600 }) } as any;
                this.sysSuccessMessage = "successfull signin...";
            }
            else
                this.sysErrorMessage = "no user found";
            this.doJsonResponse(adminData);

            // let data=await Admin.find({});
        } catch (error) {
            this.sysErrorMessage = "error";
            this.doJsonResponse(error);
        }
    }

    doLogin() {
        throw new Error("Method not implemented.");
    }

}