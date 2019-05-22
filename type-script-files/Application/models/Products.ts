import { mongoose } from "../helpers";


export namespace IProduct {
    export enum status {
        show = "show",
        hide = "hide"
    }
    export interface RootObject extends mongoose.Document {
        productName: string;
        productPrice: Number;
        status: status;
    }
}

const productSchema: mongoose.Schema = new mongoose.Schema(
    {
        productName: { type: String, required: true },
        productPrice: { type: Number, default: 0 },
        status: { type: String, default: "show" },
    }
);

export default mongoose.model<IProduct.RootObject>("products", productSchema);