import React from 'react'

function EditPreviewImage(props){
    var preview = props.preview;
    var removePreview = props.removePreview;
    var i = props.index;

    return(
        <div>
           <div style={{display: 'flex'}}>
                <button className="far fa-times-circle updateExit" onClick={() => {removePreview(i)}}></button>
                <img className='editPreviewImage' src={'data:image/png;base64, ' + preview} alt='Event preview' />
            </div>
        </div>
    );
}

export default EditPreviewImage;