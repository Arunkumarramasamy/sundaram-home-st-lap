import { Lightbox } from "react-modal-image";


import React from "react";

const PreviewImage = ({onClose,url,name}) => {
        return(
    <React.Fragment >
<Lightbox
      medium={url}
      hideDownload = 'false'
      hideZoom = 'false'
      alt={name}
      onClose={onClose}
    />
    </React.Fragment>
    )
};
export default PreviewImage;