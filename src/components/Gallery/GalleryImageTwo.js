import React from "react";
import {withRouter} from 'react-router';

const GalleryImageTwo=({imageUrl,history})=>{
    return(
        <>
        <div className="image-wrap">
            {
                imageUrl.map((url)=>(
                    <div 
                    onClick={()=>{
                       history.push(`${url.category}`) 
                    }}
                    style={{backgroundImage:
                        `url(${url.imageUrl})`,
                        backgroundRepeat:"no-repeat",
                        WebkitBackgroundSize:"cover"
                    }}
                    className="mini-poster"
                    key={url.id}
                    >
                        <div className="gallery-text-two">
                            <p className="main-text-mini">{url.title}</p>
                            <p className="category-date-mini">{url.category}{url.date}</p>
                        </div>
                    </div>
                ))
            }
        </div>
        </>
    );
};



export default withRouter(GalleryImageTwo);