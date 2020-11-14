import React, { useState } from 'react';
import appStates from './appStates';

function InitAppStates(){
    const [fetchUrl, setFetchUrl] = useState('https://deansmead-eventapp-65150.herokuapp.com');
    const [user, setUser] = useState(null);
    const [events, setEvents] = useState(null);
    const [showUpdate, setShowUpdate] = useState(null);
    const [showMap, setShowMap] = useState(null);
    appStates.fetchUrl = fetchUrl;
    appStates.setFetchUrl = setFetchUrl;
    appStates.user = user;
    appStates.setUser = setUser;
    appStates.events = events;
    appStates.setEvents = setEvents;
    appStates.showUpdate = showUpdate;
    appStates.setShowUpdate = setShowUpdate;
    appStates.showMap = showMap;
    appStates.setShowMap = setShowMap;
    return(<></>);
}

export default (() => {
    return InitAppStates;
})();