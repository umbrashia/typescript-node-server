import { IHttpSystem } from "../interfaces/helpers";
import { Response, Request } from "express";

export default class HttpSystem implements IHttpSystem{
    
    constructor(httpSystem?:HttpSystem){
        if(httpSystem){
            this._sysHttpRequest=httpSystem.sysHttpRequest;
            this._sysHttpResponse=httpSystem.sysHttpResponse;
        }

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