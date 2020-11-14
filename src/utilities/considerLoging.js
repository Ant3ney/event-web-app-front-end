function considerLoging(settings, msg){
    settings && settings.logData && !settings.logError ? console.log(msg) : doNothing();
    settings && settings.logData && settings.logError ? console.error(msg) : doNothing();
}
function doNothing(){

}
export default considerLoging;