import { IHomeController, IBaseController } from "../interfaces/controllers";
import { HttpSystem, bcrypt, crypto, jsonwebtoken, fileUpload } from "../helpers";
import { IAdmin, Admin, Filters } from "../models";

export default class HomeController extends HttpSystem implements IHomeController, IBaseController {

    constructor(httpSystem: HttpSystem) {
        super(httpSystem);
        //this.internalRouting();
    }

    secureInternalRouting(): void {
        switch (this.sysHttpRequest.params.subModule) {
            case "checkSecure":
                this.checkSecure();
                break;
            case "savefilter":
                this.savefilter();
                break;
            default:
                this.sysHttpResponse.send("ohhh wrongg....");
                break;
        }
    }

    async savefilter() {
        try {
            let data = this.sysHttpRequest.body;
            this.sysSuccessMessage = "Successfully Saved";
            const info = await new Filters(data).save();
            console.log(info);
            this.doJsonResponse({ filterData: {} });
        } catch (error) {
            this.doErrorJsonResponse(error);
        }
    }


    checkSecure() {
        this.sysSuccessMessage = "ohh token found.....";
        this.doJsonResponse({ headersData: this.sysHttpRequest.headers })
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
            case "getFilters":
                this.getFilters();
                break;
            case "uploadGlobalFiles":
                this.uploadGlobalFiles();
                break;
            default:
                this.sysHttpResponse.send("ohhh wrongg....");
                break;
        }
    }

    async uploadGlobalFiles() {
        try {
            var allFiles:fileUpload.UploadedFile[]=this.sysHttpRequest.files.files as fileUpload.UploadedFile[];
            
            for (let index = 0; index < allFiles.length; index++) {
                await allFiles[index].mv('./uploads/'+allFiles[index].name);
            } 
            //     await element.mv("uploads/"+Math.random()+".jpeg")
            // });

            
            this.sysErrorMessage = "notyet saved";
            // if (uploadRes)
               // return this.doJsonResponse({});
            this.sysSuccessMessage="successfully saved..."
            this.doJsonResponse();

        } catch (error) {
            this.doErrorJsonResponse(error);
        }
    }

    async getFilters() {
        try {
            let data = this.sysHttpRequest.body;
            this.sysSuccessMessage = "get filter data...";
            this.doJsonResponse({ filterData: await Filters.find(data) });
        } catch (error) {
            this.doErrorJsonResponse(error);
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
            return this.doJsonResponse(adminData);
        } catch (error) {
            this.sysErrorMessage = "error";
            return this.doErrorJsonResponse(error);
        }
    }

    doLogin() {
        throw new Error("Method not implemented.");
    }

}