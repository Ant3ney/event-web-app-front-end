import React, { useState } from "react";
import createEvent from "../../appLogic/fetching/createEvent";

function CreateEvent(){
    const [name, setName] = useState(null);
    const [address1, setAddress1] = useState(null);
    const [address2, setAddress2] = useState(null);
    const [country, setCountry] = useState(null);
    const [region, setRegion] = useState(null);
    const [city, setCity] = useState(null);
    const [postCode, setPostCode] = useState(null);
    const [eventStartDate, setEventStartDate] = useState(null);
    const [eventEndDate, setEventEndDate] = useState(null);
    const [category, setCategory] = useState(null);   
    const [visibility, setVisibility] = useState(null); 
    const [notes, setNotes] = useState(null); 
    const [status, setStatus] = useState(null);
    const [previews, setPreviews] = useState([]);
    const [hide, setHide] = useState(false);

    return(
        <div>
            <h3>Create Event</h3>
            <div className="d-flex" style={{width: "auto"}}>
                <div className="d-inline-block mx-auto">
                    <label className="my-auto" style={{display: "inline", width: "auto", marginRight: "1rem"}}>Hide</label>
                    <input className="my-auto" style={{display: "inline", width: "auto"}} type="checkbox" name="hide" value={true} onChange={handleHideBox}/>
                </div>
            </div>
            {!hide ?
            <form className="row" onSubmit={handleSubmit}>
                <div className="col-md-6">
                    <label>Name</label>
                    <input type="text" name="name" placeholder="Two room apartment" onChange={(e) => {formChange(e, "name")}} />
                    <label>Address 1</label>
                    <input type="text" name="addressLine_1" placeholder="3528 Emerald st. apt#02" onChange={(e) => {formChange(e, "addressLine_1")}} />
                    <label>Address 2</label>
                    <input type="text" name="addressLine_2" placeholder="3528 Emerald st. apt#04" onChange={(e) => {formChange(e, "addressLine_2")}} />
                    <label>Country</label>
                    <input type="text" name="country" placeholder="United States" onChange={(e) => {formChange(e, "country")}} />
                    <label>Post Code</label>
                    <input type="text" name="postCode" placeholder="90503" onChange={(e) => {formChange(e, "postCode")}} />
                    <label>Region</label>
                    <input type="text" name="region" placeholder="California" onChange={(e) => {formChange(e, "region")}} />
                    <label>City</label>
                    <input type="text" name="city" placeholder="Torrance" onChange={(e) => {formChange(e, "city")}} />
                </div>
                <div className="col-md-6">
                    <label>Event Start Date</label>
                    <input type="text" name="eventStartDate" placeholder="20/01/2021 01:02:10" onChange={(e) => {formChange(e, "eventStartDate")}} />
                    <label>Event End Date</label>
                    <input type="text" name="eventEndDate" placeholder="23/01/2021 01:02:10" onChange={(e) => {formChange(e, "eventEndDate")}} />
                    <label>Category</label>
                    <input type="text" name="category" placeholder="Apartment" onChange={(e) => {formChange(e, "category")}} />
                    <label>Visibility</label>
                    <input type="text" name="visibility" placeholder="public" onChange={(e) => {formChange(e, "visibility")}} />
                    <label>Notes</label>
                    <input type="text" name="notes" placeholder="Please dont bring your dog." onChange={(e) => {formChange(e, "notes")}} />
                    <label>Status</label>
                    <input type="text" name="status" placeholder="Open" onChange={(e) => {formChange(e, "status")}} />
                    <span className='uploaderParent'><input className='filepond' name="filepond" multiple data-max-files="3" data-max-file-size="3MB" type="file"/></span>
                </div>
                <button className="mx-auto mt-2">Submit</button>
            </form>
            : <div></div>}
        </div>
    );

    function generatePreviews(){
        preventWarning(previews);//For the purpose of stoping the anoying warning
        var ponEle = window.ponEle;
        var newPreviews = [];
        ponEle.getFiles().forEach((image) => {
            var encodedImage = image.getFileEncodeBase64String();
            newPreviews.push(encodedImage);
        });

        setPreviews(newPreviews);
        return newPreviews;
    }

    function formChange(event, type){
        switch(type){
            case "name":
                setName(event.target.value);
                break;
            case "addressLine_1":
                setAddress1(event.target.value);
                break
            case "addressLine_2":
                setAddress2(event.target.value);
                break;
            case "country":
                setCountry(event.target.value);
                break;
            case "region":
                setRegion(event.target.value);
                break;
            case "city":
                setCity(event.target.value);
                break;
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
                console.error('Default case called. This should not happen');
                break;
        }
    }
    function handleSubmit(event){
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
            previews: generatePreviews(),
            notes: notes,
            status: status
        });

        createEvent(data);
    }
    function handleHideBox(event){
        setHide(!hide);
    }
    function preventWarning(){

    }
}

export default CreateEvent;