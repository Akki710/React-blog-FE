//Imports
import React from "react";
import {useSelector} from 'react-redux';

//importing styles
import "../../styles/galleryCarousel.scss";


const GalleryCarousel=()=>{
    const imageBigUrl=useSelector(state=> state.gallery.imageBig);
    const imageSmallUrl=useSelector(state=> state.gallery.imageDuo);
    return(
        <>
        <div id="slider">
            <figure>
                <img src={imageBigUrl} alt="carousel" />
                <img src={imageSmallUrl[0].imageUrl} alt="carousel" />
                <img src={imageSmallUrl[1].imageUrl} alt="carousel" />
                <img src={imageSmallUrl[0].imageUrl} alt="carousel" />
                <img src={imageBigUrl} alt="carousel" />
            </figure>
        </div>
        </>
    );
};


export default GalleryCarousel;