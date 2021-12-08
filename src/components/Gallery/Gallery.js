import React from 'react';
import { useSelector } from 'react-redux';
//importing components
import GalleryBigImage from '../Gallery/GalleryBigImage';
import GalleryImageDuo from '../Gallery/GalleryImageTwo';


//import styles
import "../../styles/gallery.scss";

const Gallery= ()=>{
    const imageBigUrl=useSelector(state=>state.gallery.imageBig);
    const imageSmallUrl=useSelector(state=>state.gallery.imageDuo)
    return(
        <>
        <div className="gallery-wrap">
            <GalleryBigImage imageUrl={imageBigUrl} />
            <GalleryImageDuo imageUrl={imageSmallUrl} />
        </div>
        </>
    )
}
export default Gallery;
