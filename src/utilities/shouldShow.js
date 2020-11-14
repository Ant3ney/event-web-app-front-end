import appStates from '../appLogic/appStates';

var shouldShow = (query) => {
    if(query === 'map'){
        if(appStates.showMap){
            return true
        }
        return false;
    }
    else if(query === 'update'){
        if(appStates.showUpdate){
            return true;
        }
        return false;
    }
    else if(query === 'events'){
        if(appStates.events){
            return true
        }
    }
}

export default shouldShow;