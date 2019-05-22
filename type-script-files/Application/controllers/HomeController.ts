import { IHomeController, IBaseController } from "../interfaces/controllers";
import { HttpSystem, mongoose } from "../helpers";
import { Armyman, Products, IProduct } from "../models";
import { response } from "express";

export default class HomeController extends HttpSystem implements IHomeController, IBaseController {

    private armyman: Armyman;
    

    constructor(httpSystem: HttpSystem) {
        super(httpSystem);
        this.armyman = new Armyman(httpSystem);
        this.internalRouting();
    }

    internalRouting(): void {
        //subModule
        switch (this.sysHttpRequest.params.subModule) {
            case "getArmyMans":
                this.getArmyMans();
                break;
            default:
                this.sysHttpResponse.send("ohhh wrongg....");
                break;
        }
    }

    async getArmyMans() {
        try {
            
            const insert:IProduct.RootObject & any={
                productName:"Nokia one",
                productPrice:9999,
                status:IProduct.status.show
            };
            
            await new Products(insert).save();
            let data=await Products.find();
            
            //let data = { nodata: "na" }
            this.sysHttpResponse.send(JSON.stringify(data));
        } catch (error) {
            console.log(error);
        }
    }

    doLogin() {
        throw new Error("Method not implemented.");
    }

}