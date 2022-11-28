import { Lightbox } from "react-modal-image";


import React from "react";

const PreviewImage = ({onClose,url,open}) => {
console.log(url);
        return(
    <React.Fragment >
<Lightbox
      medium={url}
      hideDownload = {false}
      alt="preview"
      onClose={onClose}
    />
    </React.Fragment>
    )
};
export default PreviewImage;