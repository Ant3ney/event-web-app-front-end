import MapContainer from './maps/MapContainer';
import EventContainer from './Event/EventContainer';
import SelectFetch from './SelectFetch';
import AuthContainer from './Authentication/AuthContainer';
import CreateEvent from './Event/CreateEvent';
import UpdateEventHolder from './Event/UpdateEventHolder';

function GetCashedComponent(props){

    var cashedObj = {
        MapContainer: <MapContainer />,
        EventContainer: <EventContainer event={props ? props.events : 'error'}/>,
        SelectFetch: <SelectFetch />,
        AuthContainer: <AuthContainer />,
        CreateEvent: <CreateEvent />,
        UpdateEventHolder: <UpdateEventHolder />
    }

    return cashedObj;
}


export default GetCashedComponent;