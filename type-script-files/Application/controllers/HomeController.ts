import { IHomeController, IBaseController } from "../interfaces/controllers";

export default class HomeController implements IHomeController,IBaseController{

    internalRouting(route: any, subRoute: any): Promise<void> {
        let a={name:"sdsd",age:12,class:"all"};
        let b={...a,class:"Fully"};
        throw new Error("Method not implemented.");
    }
    doLogin() {
        throw new Error("Method not implemented.");
    }

}