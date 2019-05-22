import { Request, Response } from "express";
import { Db } from "mongodb";

export default interface IHttpSystem{
    
    sysHttpRequest:Request;
    sysHttpResponse:Response;
    sysDatabaseDb:Db;
    sysSuccessMessage:String;
    sysErrorMessage:String;
    sysJsonBodyObj:any;
}