import { IHttpSystem } from "../interfaces/helpers";
import { Response, Request } from "express";
import { Db } from "mongodb";

export default class HttpSystem implements IHttpSystem {

    constructor(httpSystem?: HttpSystem) {
        if (httpSystem) {
            this._sysHttpRequest = httpSystem.sysHttpRequest;
            this._sysHttpResponse = httpSystem.sysHttpResponse;
            this._sysDatabaseDb = httpSystem.sysDatabaseDb;
        }

    }

    doJsonResponse(data: any = {}) {
        if (this._sysSuccessMessage)
            return this._sysHttpResponse.status(200).json({ status: true, message: this._sysSuccessMessage, data: data });
        else
            return this._sysHttpResponse.status(200).json({ status: false, message: this._sysErrorMessage, data: data });

    }

    doErrorJsonResponse(data: any = {}) {
        return this._sysHttpResponse.status(200).json({ status: false, message: this._sysErrorMessage, data: data });
    }

    private _sysJsonBodyObj: any;
    public get sysJsonBodyObj(): any {
        return this._sysJsonBodyObj;
    }
    public set sysJsonBodyObj(value: any) {
        this._sysJsonBodyObj = value;
    }

    private _sysSuccessMessage: String;
    public get sysSuccessMessage(): String {
        return this._sysSuccessMessage;
    }
    public set sysSuccessMessage(value: String) {
        this._sysErrorMessage = null;
        this._sysSuccessMessage = value;
    }

    private _sysErrorMessage: String;
    public get sysErrorMessage(): String {
        return this._sysErrorMessage;
    }
    public set sysErrorMessage(value: String) {
        this._sysSuccessMessage = null;
        this._sysErrorMessage = value;
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