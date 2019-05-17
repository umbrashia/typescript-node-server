export default interface IBaseController{
    /**
     * All controller have internal routings
     * @param route First Url Pram
     * @param subRoute Second Url Pram
     */
    internalRouting(route:any,subRoute:any):Promise<void>;
}