

export default interface IAppDatabase {
    collectionName: String;
    getAggregate(condictions: any): Promise<any>;
    doInsert(insertData:any):Promise<any>;
}