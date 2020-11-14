import appStates from './appStates';



var sets = () => {
    var fSet = {
        fetchUrl: appStates.fetchUrl,
        setFetchUrl: appStates.setFetchUrl
    }
    var eSet = {
        events: appStates.events,
        setEvents: appStates.setEvents,
        showUpdate: appStates.showUpdate,
        setShowUpdate: appStates.setShowUpdate
    }
    var uSet = {
        user: appStates.user,
        setUser: appStates.setUser
    }
    var mSet = {
        showMap: appStates.showMap,
        setShowMap: appStates.setShowMap
    }
    
    var sets = {
        fSet: fSet,
        eSet: eSet,
        uSet: uSet,
        mSet: mSet
    }

    return sets;
};

export default sets;