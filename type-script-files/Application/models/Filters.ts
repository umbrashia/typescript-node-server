import { mongoose } from "../helpers";


export namespace IFilters {
    export enum filterTypes {
        homeSlider = "homeslider",
        cmsPage = "cmspage",
        blog = "blog",
    }
    export enum fileType {
        image = "image",
        document = "document",
    }
    export interface files extends mongoose.Document{
        name: String;
        type: fileType;
        order: Number;
    }
    export interface RootObject extends mongoose.Document {
        _id: String;
        filterValue: String;
        filterFiles: files[];
        filterType: filterTypes;
        filterStatus: String;
        filterDatetime: Date;
        filterDescription: String;
        filterDitle: String;
        filtersFeature: String;
    }
}


const filterSchema = new mongoose.Schema<IFilters.RootObject>({
    filterValue: { type: String, default: null },
    filterFiles: [
        new mongoose.Schema({
            name: { type: String, default: null },
            type: { type: String, default: null },
            order: { type: Number, default: 0 },
        })
    ],
    filterType: { type: String, default: null },
    filterStatus: { type: String, default: null },
    filterDatetime: { type: Date, default: new Date() },
    filterDescription: { type: String, default: null },
    filterDitle: { type: String, default: null },
    filtersFeature: { type: String, default: null },
});

const sd: IFilters.RootObject = null;

export default mongoose.model<IFilters.RootObject>("Filters", filterSchema);

/*
Cpanel Access Markup design In server
--------------------------------------------
https://indiavip2.noc401.com:2083/
username : esignsmarkupd
Password : {5PoAV=W67qy
*/