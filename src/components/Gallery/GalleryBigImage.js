import React from "react";
import { withRouter } from 'react-router';

const GalleryBigImage=({imageUrl,history})=>{
    return(
        <>
        <div 
             onClick={()=>history.push("/hollywood")}
             style={{backgroundImage:
                `url(${imageUrl})`,
                backgroundRepeat:"no-repeat",
                WebkitBackgroundSize:"cover"
            }}
            className="image-big"
        >
            <div className="gallery-text-big">
                <p className="main-text">All Your favorite movie blogs in one place</p>
                <p className="category-date">Hollywood/August 21 2021</p>
            </div>
        </div>
        </>
    );
};


export default withRouter(GalleryBigImage);