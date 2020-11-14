import React, { useState } from 'react';
import "../../../css/event.css";
import placeholder from "../../../images/images.png";

function EventPreview(props){
    const [previewIndex, setPreviewIndex] = useState(0);

    return(
        <div className="imageContainer">
            {!showPlaceholder() ? 
            <div className='previewContainer'>
                <button className='fas fa-chevron-circle-left previewButton' onClick={decrementIndex}></button>
                <img className="previewImage" src={'data:image/png;base64, ' + props.event.previews[previewIndex]} alt='Home preview' />
                <button className='fas fa-chevron-circle-right previewButton' onClick={incrementIndex}></button>
            </div> :
            <img className='placeHolderImage' src={placeholder} alt='Home preview' />}
        </div>
    );

    function showPlaceholder(){
        if (props.event.previews.length > 0){
            return false;
        }
        return true;
    }

    function incrementIndex(){
        if(!props.event.previews){
            console.error('Canot increment event preview if there are no event previews');
            return;
        }
        if((previewIndex + 1) >= (props.event.previews.length)){
            setPreviewIndex(0);
            return;
        }
        setPreviewIndex(previewIndex + 1);
    }
    function decrementIndex(){
        if(!props.event.previews){
            console.error('Canot increment event preview if there are no event previews');
            return;
        }
        if((previewIndex - 1) < 0){
            setPreviewIndex(props.event.previews.length - 1);
            return;
        }
        setPreviewIndex(previewIndex - 1);
    }
}

export default EventPreview;