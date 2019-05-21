import { HttpSystem, AppDatabase } from "../helpers";
import { joi } from "../interfaces/helpers";

enum status{
    show="show",
    hide="hide"
}

interface RootObject {
    _id?: any;
    name?: any;
    phone?: any;
    city?: any;
    status?: any & status;
    favproducts?: FavproductsItem[];
}
interface FavproductsItem {
    _id?: any;
    name?: any;
    price?: any;
}

class Armyman extends AppDatabase<RootObject> {

    constructor(httpSystem: HttpSystem) {
        super("armyman", httpSystem);
        const FacSchema: FavproductsItem = {
            _id: joi.string(),
            name: joi.string(),
            price: joi.number().default(0.00)
        };
        this.setSkeleton({
            _id: joi.string(),
            name: joi.string(),
            phone: joi.string(),
            city: joi.string(),
            status: joi.string().default("show"),
            favproducts: joi.array().items(FacSchema).default([]) as any
        });
    }



}

export { Armyman }