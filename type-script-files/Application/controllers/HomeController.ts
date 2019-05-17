import { IHomeController, IBaseController } from "../interfaces/controllers";
import { HttpSystem } from "../helpers";

export default class HomeController extends HttpSystem implements IHomeController,IBaseController{

    constructor(httpSystem:HttpSystem){
        super(httpSystem);
        this.internalRouting();
    }

    internalRouting():void {
        let a={name:"sdsd",age:12,class:"all"};
        let b={...a,class:"Fully"};
        throw new Error("Method not implemented.");
    }
    doLogin() {
        throw new Error("Method not implemented.");
    }

}