import React, { useEffect, useState } from "react";
import EventContainer from "./components/EventContainer"
import './App.css';
import TestCookie from "./components/TestCookie";
import SelectFetch from "./components/SelectFetch";
import AuthContainer from "./components/AuthContainer";
import CreateEvent from "./components/CreateEvent";
import UpdateEventHolder from "./components/UpdateEventHolder";
import data from "./appLogic/data";
import initialFetch from "./appLogic/fetching/initialFetch";
import initMap from "./appLogic/hereApi/initMap";
import MapContainer from "./components/maps/MapContainer";

function App() {
  const [fetchUrl, setFetchUrl] = useState('https://deansmead-eventapp-65150.herokuapp.com');
  const [user, setUser] = useState(null);
  const [events, setEvents] = useState(null);
  const [showUpdate, setShowUpdate] = useState(null);
  const [formatDate, setFormatDate] = useState(null);
  const [showMap, setShowMap] = useState(null);

  var fSet = {
    fetchUrl: fetchUrl,
    setFetchUrl: setFetchUrl
  }
  var eSet = {
    events: events,
    setEvents: setEvents,
    showUpdate: showUpdate,
    setShowUpdate: setShowUpdate,
    formatDate: formatDate,
    setFormatDate: setFormatDate
  }
  var uSet = {
    user: user,
    setUser: setUser
  }

  var mSet = {
    showMap: showMap,
    setShowMap: setShowMap
  }

  data.fSet = fSet;
  data.eSet = eSet;
  data.uSet = uSet;
  data.mSet = mSet;

  useEffect(() => {
    initialFetch({logData: true});
  }, []);
  return (
    <div>
      {showMap ? 
      <MapContainer 
       mSet={mSet}
      /> : 
      <div></div>}
      {showUpdate ? 
      <UpdateEventHolder 
       fSet={fSet}
       eSet={eSet}
      /> : 
      <div></div>}
      <SelectFetch 
       fSet={fSet}
       initialFetch={initialFetch}
      />
      <TestCookie 
       fSet={fSet}
      />
      <AuthContainer 
       fSet={fSet}
       uSet={uSet}
       user={user}
      />
      <CreateEvent 
        fSet={fSet}
        user={user}
      />
      <EventContainer 
       fSet={fSet}
       user={user}
       eSet={eSet}
      />
    </div>
  );
}

export default App;
