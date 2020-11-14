import React, { useEffect } from "react";
import './App.css';
import appStates from './appLogic/appStates';
import shouldShow from './utilities/shouldShow';
import GetCashedComponent from './components/GetCashedComponent';
import init from './appLogic/init';

function App() {
  init.beginingOfApp();

  useEffect(() => {
    init.appMounted();
    init.filePond();
  }, []);
  return (
    <div>
      {appStates.showMap ? 
      GetCashedComponent()['MapContainer'] :
      <div></div>}
      
      {shouldShow('update') ? 
      GetCashedComponent()['UpdateEventHolder'] : 
      <div></div>}
      {GetCashedComponent()['SelectFetch']}
      {GetCashedComponent()['AuthContainer']}
      {GetCashedComponent()['CreateEvent']}
      {GetCashedComponent({events: appStates.events})['EventContainer']}
    </div>
  );
}

export default App;
