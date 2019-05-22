export default interface IBaseController{
    /**
     * All controller have internal routing without any auth.
     */
    internalRouting():void;

    /**
     * All controller have secure internal routing include auth token based security.
     */
    secureInternalRouting():void;
}