function considerLoging(settings, msg){
    console.log(msg);
    settings && settings.logData && !settings.logError ? console.log(msg) : doNothing();
    settings && settings.logData && settings.logError ? console.error(msg) : doNothing();
}
function doNothing(){

}
export default considerLoging;