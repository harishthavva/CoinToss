import React from 'react'
// ImageData from "../ImageData/ImageData";
import ImageData from "../ImageData/ImageData";

function RandomPicker() {

    const guess= Math.floor(Math.random()*2)
    const Image=ImageData[guess].image;
    const data= ImageData[guess].data;

    return (
      
        <div>
            <img src={Image} style={{height:"auto", width:"200px"}} alt="Emoji for the Head/Tail Coin" />
            <h2>{data}</h2>
        </div>
    )
}

export default RandomPicker;
