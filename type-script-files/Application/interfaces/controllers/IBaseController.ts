export default interface IBaseController{
    /**
     * All controller have internal routings
     * @param route First Url Pram
     * @param subRoute Second Url Pram
     */
    internalRouting():void;
}