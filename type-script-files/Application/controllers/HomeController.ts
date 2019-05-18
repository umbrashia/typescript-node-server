import { IHomeController, IBaseController } from "../interfaces/controllers";
import { HttpSystem } from "../helpers";

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
            default:
                this.sysHttpResponse.send("ohhh wrongg....");
                break;
        }
    }

    async getArmyMans(){
        let data=await this.sysDatabaseDb.collection("armyman").find().toArray();
        this.sysHttpResponse.send(JSON.stringify(data));
    }

    doLogin() {
        throw new Error("Method not implemented.");
    }

}