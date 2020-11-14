import React from 'react'
import EditPreviewImage from './EditPreviewImage';

function EditPreviewContainer(props){
    var preview = props.preview;
    var index = props.index

    return(
        <div className='col-4 editPreviewColumn d-flex'>
            <span className="mx-auto editPreviewImageContainer">
                <div className='EditPreviewImageOuterContainer'>
                    <EditPreviewImage 
                     preview={preview}
                     index={index}
                     removePreview={props.removePreview}
                     key={props.key}
                    />
                </div>
            </span>
         </div>
    );
}

export default EditPreviewContainer;