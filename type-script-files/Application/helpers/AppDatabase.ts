import { IAppDatabase } from "../interfaces/helpers";
import { HttpSystem } from ".";


export default class AppDatabase extends HttpSystem implements IAppDatabase {
    public collectionName: any = "";

    constructor(collectionName: String, httpSystem: HttpSystem) {
        super(httpSystem);
        this.collectionName = collectionName;
    }

    async getAggregate(condictions: any): Promise<any> {
        return this.sysDatabaseDb.collection(this.collectionName).aggregate(condictions).toArray();
    }

    async doInsert(insertData: any): Promise<any> {
        return this.sysDatabaseDb.collection(this.collectionName).insertOne(insertData);
    }


}