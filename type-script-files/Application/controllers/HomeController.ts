import { IHomeController, IBaseController } from "../interfaces/controllers";
import { HttpSystem } from "../helpers";
import { Armyman, bodyArmyman } from "../models";
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
            
           
            await this.armyman.doInsert({});
            let data = await this.sysDatabaseDb.collection("armyman").find().toArray();
            this.sysHttpResponse.send(JSON.stringify(data));
        } catch (error) {
            console.log(error);
        }
    }

    doLogin() {
        throw new Error("Method not implemented.");
    }

}