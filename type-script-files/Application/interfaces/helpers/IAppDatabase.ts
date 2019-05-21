import * as joi from '@hapi/joi';

export default interface IAppDatabase<ISkeleton> {
    collectionName: String;
    databaseSchema:joi.ObjectSchema;
    getAggregate(condictions: any): Promise<any>;
    doInsert(insertData:any):Promise<any>;
    //setSkeleton(schema:ISkeleton):void;
}