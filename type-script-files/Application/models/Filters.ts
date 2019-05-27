import { mongoose } from "../helpers";


export namespace IFilters {
    export enum filterTypes {
        homeSlider = "homeslider",
        cmsPage = "cmspage",
        blog = "blog",
    }
    export enum status {
        show = "show",
        hide = "hide"
    }
    export enum fileType {
        image = "image",
        document = "document",
    }
    export interface files extends mongoose.Document {
        name: String;
        type: fileType;
        order: Number;
    }
    export interface subFilters {
        subTitle: String;
        subDescription: String;
    }
    export interface RootObject extends mongoose.Document {
        filterValue: String;
        filterFiles: files[];
        filterType: filterTypes;
        filterStatus: status;
        filterDatetime: Date;
        filterDescription: String;
        filterTitle: String;
        filterSubCat: subFilters[];
        filtersFeature: String;
    }
    export const filterSchema = new mongoose.Schema<IFilters.RootObject>({
        filterValue: { type: String, default: null },
        filterFiles: [
            new mongoose.Schema({
                name: { type: String, default: null },
                type: { type: String, default: null },
                order: { type: Number, default: 0 },
            })
        ],
        filterSubCat: [
            new mongoose.Schema({
                subTitle: { type: String, default: null },
                subDescription: { type: String, default: null },
            })
        ],
        filterType: { type: String, default: null, required: true },
        filterStatus: { type: String, default: "show" },
        filterDatetime: { type: Date, default: new Date() },
        filterDescription: { type: String, default: null },
        filterTitle: { type: String, default: null },
        filtersFeature: { type: String, default: null },
    });
}




const sd: IFilters.RootObject = null;

export default mongoose.model<IFilters.RootObject>("Filters", IFilters.filterSchema);

/*
Cpanel Access Markup design In server
--------------------------------------------
https://indiavip2.noc401.com:2083/
username : esignsmarkupd
Password : {5PoAV=W67qy
*/