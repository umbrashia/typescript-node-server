import {IBaseController,IHomeController} from './interfaces/controllers';

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
    let thsnks = new MainInit().internalRouting(1,2);
});