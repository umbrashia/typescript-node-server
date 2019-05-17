import {IBaseController,IHomeController} from './Application/interfaces/controllers';
import HomeController from './Application/controllers/HomeController';

class MainInit  implements IHomeController,IBaseController {
    
    constructor(){

    }

    async internalRouting(route:any,subRoute:any){

    }

    async doLogin(){
        
    }

    async sayHello(){
        return "hellossss";
    }
    
}

(async()=>{
    new HomeController();
    let thsnks = new MainInit().internalRouting(5,5);
});