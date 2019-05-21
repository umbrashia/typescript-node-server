import { IAppDatabase, joi } from "../interfaces/helpers";
import { HttpSystem } from ".";
// import * as joi from '@hapi/joi';


export default class AppDatabase<ISkeleton> extends HttpSystem implements IAppDatabase<ISkeleton> {
    public collectionName: any = "";
    private _databaseSchema: joi.ObjectSchema;

    protected setSkeleton(schema: ISkeleton): void {
        this.databaseSchema = joi.object().keys(schema as any);
    }

    public get databaseSchema(): joi.ObjectSchema {
        return this._databaseSchema;
    }
    public set databaseSchema(value: joi.ObjectSchema) {
        this._databaseSchema = value;
    }

    constructor(collectionName: String, httpSystem: HttpSystem) {
        super(httpSystem);
        this.collectionName = collectionName;
    }

    async getAggregate(condictions: any): Promise<any[]> {
        return this.sysDatabaseDb.collection(this.collectionName).aggregate(condictions).toArray();
    }

    async doInsert(insertData: any): Promise<any> {
        return this.sysDatabaseDb.collection(this.collectionName).insertOne(insertData);
    }


}