import { HttpSystem, AppDatabase, mongoose } from "../helpers";

export namespace IAdmin {
    export enum status {
        show = "show",
        hide = "hide"
    }
    export enum role {
        admin = "admin",
        subadmin = "admin"
    }
    export interface RootObject extends mongoose.Document {
        _id: String;
        name: String;
        userName: String;
        email: String;
        siteEmail: String;
        password: String;
        sitePhone: String;
        status: status;
        role: role;
    }
}

const adminSchema = new mongoose.Schema(
    {
        name: { type: String, default: null },
        userName: { type: String, unique: true, required: true },
        email: { type: String, unique: true, required: true },
        siteEmail: { type: String, default: null },
        password: { type: String, default: null },
        sitePhone: { type: String, default: null },
        status: { type: String, default: "show" },
        role: { type: String, default: "admin" }
    }
);

export default mongoose.model<IAdmin.RootObject>("admins", adminSchema);