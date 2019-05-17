import { Request, Response } from "express";

export default interface IHttpSystem{
    
    sysHttpRequest:Request;
    sysHttpResponse:Response;
    
}