import { HttpSystem, AppDatabase } from "../helpers";
import { joi } from "../interfaces/helpers";


interface RootObject {
    _id: any;
    name: any;
    phone: any;
    city: any;
    status: any;
    favproducts: FavproductsItem[];
}
interface FavproductsItem {
    _id: any;
    name: any;
    price: any;
}

class Armyman extends AppDatabase<RootObject> {

    constructor(httpSystem: HttpSystem) {
        super("armyman", httpSystem);
        const FacSchema: FavproductsItem = {
            _id: joi.string(),
            name: joi.string(),
            price: joi.number().min(0)
        };
        this.setSkeleton({
            _id: joi.string(),
            name: joi.string(),
            phone: joi.string(),
            city: joi.string(),
            status: joi.string(),
            favproducts: joi.array().items(FacSchema) as any
        });
    }



}

export { Armyman }