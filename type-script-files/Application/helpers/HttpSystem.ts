import { IHttpSystem } from "../interfaces/helpers";
import { Response, Request } from "express";
import { Db } from "mongodb";

export default class HttpSystem implements IHttpSystem {

    constructor(httpSystem?: HttpSystem) {
        if (httpSystem) {
            this._sysHttpRequest = httpSystem.sysHttpRequest;
            this._sysHttpResponse = httpSystem.sysHttpResponse;
            this._sysDatabaseDb=httpSystem.sysDatabaseDb;
        }

    }

    private _sysDatabaseDb: Db;

    public get sysDatabaseDb(): Db {
        return this._sysDatabaseDb;
    }
    public set sysDatabaseDb(value: Db) {
        this._sysDatabaseDb = value;
    }

    private _sysHttpRequest: Request;

    public get sysHttpRequest(): Request {
        return this._sysHttpRequest;
    }
    public set sysHttpRequest(value: Request) {
        this._sysHttpRequest = value;
    }

    private _sysHttpResponse: Response;

    public get sysHttpResponse(): Response {
        return this._sysHttpResponse;
    }
    public set sysHttpResponse(value: Response) {
        this._sysHttpResponse = value;
    }



}