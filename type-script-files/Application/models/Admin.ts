import { HttpSystem, AppDatabase } from "../helpers";
import { joi } from "../interfaces/helpers";

declare module Inamespace {
    enum status{
        show="show",
        hide="hide"
    }
    interface RootObject {
        _id: any;
        name: any;
        userName: any;
        email: any;
        siteEmail: any;
        password: any;
        sitePhone: any;
        status: any & status;
    }
}

class Admin extends AppDatabase<Inamespace.RootObject> {

    constructor(httpSystem: HttpSystem) {
        super("admin", httpSystem);
        this.setSkeleton({
            _id: joi.string(),
            name: joi.string().required(),
            email: joi.string().email().required(),
            userName: joi.string().required(),
            siteEmail: joi.string().email().default("noemail@olivs.com"),
            password: joi.string().required(),
            sitePhone: joi.string().default("000000000"),
            status: joi.string().default("show"),
        });
    }



}

export { Admin, Inamespace as IAdmin }