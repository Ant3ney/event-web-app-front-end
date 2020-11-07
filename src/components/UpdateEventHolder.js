import React, { useState } from "react";
import sData from "../appLogic/data";
import updateEvent from "../appLogic/fetching/updateEvent";

function UpdateEventHolder(props){
    var index = 0;
    const event = getCurrentEvent();

    const [name, setName] = useState(event.name);
    const [address1, setAddress1] = useState(event.addressLine_1);
    const [address2, setAddress2] = useState(event.addressLine_2);
    const [country, setCountry] = useState(event.country);
    const [region, setRegion] = useState(event.region);
    const [city, setCity] = useState(event.city);
    const [postCode, setPostCode] = useState(event.postCode);
    const [eventStartDate, setEventStartDate] = useState(event.eventStartDate);
    const [eventEndDate, setEventEndDate] = useState(event.eventEndDate);
    const [category, setCategory] = useState(event.category);   
    const [visibility, setVisibility] = useState(event.visibility); 
    const [notes, setNotes] = useState(event.notes); 
    const [status, setStatus] = useState(event.status);

    return(
        <div className="updateContainer">
            <h3>Update Event</h3>
            <form className="row" onSubmit={handleUpdate}>
                <div className="col-6">
                    <label>Name</label>
                    <input type="text" name="name" placeholder="Two room apartment" defaultValue={event.name} onChange={(e) => {formChange(e, "name")}} />
                    <label>Address 1</label>
                    <input type="text" name="addressLine_1" placeholder="3528 Emerald st. apt#02" defaultValue={event.addressLine_1} onChange={(e) => {formChange(e, "addressLine_1")}} />
                    <label>Address 2</label>
                    <input type="text" name="addressLine_2" placeholder="3528 Emerald st. apt#04" defaultValue={event.addressLine_2} onChange={(e) => {formChange(e, "addressLine_2")}} />
                    <label>Country</label>
                    <input type="text" name="country" placeholder="United States" defaultValue={event.country} onChange={(e) => {formChange(e, "country")}} />
                    <label>Post Code</label>
                    <input type="text" name="postCode" placeholder="90503" defaultValue={event.postCode} onChange={(e) => {formChange(e, "postCode")}} />
                    <label>Region</label>
                    <input type="text" name="region" placeholder="California" defaultValue={event.region} onChange={(e) => {formChange(e, "region")}} />
                    <label>City</label>
                    <input type="text" name="city" placeholder="Torrance" defaultValue={event.city} onChange={(e) => {formChange(e, "city")}} />
                </div>
                <div className="col-6">
                    <label>Event Start Date</label>
                    <input type="text" name="eventStartDate" placeholder="20/01/2021 01:02:10" defaultValue={event.eventStartDate} onChange={(e) => {formChange(e, "eventStartDate")}} />
                    <label>Event End Date</label>
                    <input type="text" name="eventEndDate" placeholder="23/01/2021 01:02:10" defaultValue={event.eventEndDate} onChange={(e) => {formChange(e, "eventEndDate")}} />
                    <label>Category</label>
                    <input type="text" name="category" placeholder="Apartment" defaultValue={event.category} onChange={(e) => {formChange(e, "category")}} />
                    <label>Visibility</label>
                    <input type="text" name="visibility" placeholder="public" defaultValue={event.visibility} onChange={(e) => {formChange(e, "visibility")}} />
                    <label>Notes</label>
                    <input type="text" name="notes" placeholder="Please dont bring your dog." defaultValue={event.notes} onChange={(e) => {formChange(e, "notes")}} />
                    <label>Status</label>
                    <input type="text" name="status" placeholder="Open" defaultValue={event.status} onChange={(e) => {formChange(e, "status")}} />
                </div>
                <div class="mx-auto d-flex mt-2">
                    <button onClick={handleUpdate}>Submit</button>
                    <button onClick={handleClose}>Close</button>
                </div>
            </form>
        </div>
    );

    function formChange(event, type){
        switch(type){
            case "name":
                setName(event.target.value);
                break;
            case "addressLine_1":
                setAddress1(event.target.value);
                break;
            case "addressLine_2":
                setAddress2(event.target.value);
                break
            case "country":
                setCountry(event.target.value);
                break;
            case "region":
                setRegion(event.target.value);
                break;
            case "city":
                setCity(event.target.value);
                break
            case "postCode":
                setPostCode(event.target.value);
                break;
            case "eventStartDate":
                setEventStartDate(event.target.value);
                break;
            case "eventEndDate":
                setEventEndDate(event.target.value);
                break;
            case "category":
                setCategory(event.target.value);
                break;
            case "visibility":
                setVisibility(event.target.value);
                break;
            case "notes":
                setNotes(event.target.value);
                break;
            case "status":
                setStatus(event.target.value);
                break;
            default:
                console.error("Invalid formChange argument");
                break;
        }
    }

    function handleUpdate(event){
        event.preventDefault();
        var data = JSON.stringify({
            name: name,
            addressLine_1: address1,
            addressLine_2: address2,
            country: country,
            region: region,
            city: city,
            postCode: postCode,
            eventStartDate: eventStartDate,
            eventEndDate: eventEndDate,
            category: category,
            visibility: visibility,
            notes: notes,
            status: status
        });

        updateEvent(data);
    }

    function handleClose(){
        props.eSet.setShowUpdate(false);
    }

    function getCurrentEvent(){
        var events = props.eSet.events;
        for(index= 0; index < events.length; index++){
            if(events[index]._id === sData.curentId){
                return events[index];
            }
        }

        return null;
    }
}
export default UpdateEventHolder;