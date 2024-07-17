import React, { useState, useEffect } from "react";

const Image  = (props) =>{
    const {src,alt,customStyle} = props;

    const [isLoaded,setImageLoadState] = useState(false);

    const handleOnLoad = () =>{
        setImageLoadState(true);
    }
       
    return (
        <>
    <img src={src} onLoad={handleOnLoad}   style={{display: isLoaded? 'initial' :'none',...customStyle}} alt={alt}/>
    {isLoaded ? null : 'loading image'}
    </>)
}


export default Image;