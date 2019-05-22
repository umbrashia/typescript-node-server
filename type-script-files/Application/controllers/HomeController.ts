import { IHomeController, IBaseController } from "../interfaces/controllers";
import { HttpSystem, bcrypt, crypto, jsonwebtoken } from "../helpers";
import { Products, IProduct, IAdmin, Admin } from "../models";

export default class HomeController extends HttpSystem implements IHomeController, IBaseController {

    constructor(httpSystem: HttpSystem) {
        super(httpSystem);
        this.internalRouting();
    }

    internalRouting(): void {
        //subModule
        switch (this.sysHttpRequest.params.subModule) {
            case "getArmyMans":
                this.getArmyMans();
                break;
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

    async getArmyMans() {
        try {

            const insert: IProduct.RootObject & any = {
                productName: "Nokia one",
                productPrice: 9999,
                status: IProduct.status.show
            };

            await new Products(insert).save();
            let data = await Products.find();

            //let data = { nodata: "na" }
            this.sysHttpResponse.send(JSON.stringify(data));
        } catch (error) {

        }
    }

    doLogin() {
        throw new Error("Method not implemented.");
    }

}