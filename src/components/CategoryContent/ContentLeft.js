import React from 'react';
import { useDispatch } from 'react-redux';
import {withRouter} from 'react-router-dom';


//importing actions
import {blogContentAction} from '../../redux/actions/blogContentAction';




const ContentLeft = ({pageData,pageName,history}) => {
    const dispatch=useDispatch();
    return (
        <div
         onClick={
            () => {
                dispatch(blogContentAction(pageData));
                history.push(`${history.location.pathname}/${pageData.title}`);
            }
            }
         className="blog-card-left">
            {
                pageData.item === 1 ?
                <div>
                    <h2 style={{fontSize: "2.5rem"}}>{pageData.category}</h2>
                    <hr className="bollywood-name-hr" /> 
                </div> : null
            }
                <div className="blog-card-item-left">
                    <div className="blog-card-image-div-left">
                        <img 
                         src={pageData.imageUrl} 
                         alt="blogImage" 
                         className="blog-card-image"
                         />
                    </div>
                    <div className="blog-card-text-left">
                    <p
                     className="blog-card-title"
                    >{pageData.title}</p>
                    <p
                     className="blog-card-para"
                    >{pageData.shortPara}
                    </p>
                    <p className="blog-card-category">{pageData.category} <span className="blog-card-span">{pageData.date}</span></p>
                    </div>
                </div>
                {
                    pageData.item !== 7 ? <hr className="blog-card-hr" /> : null
                }
                {
                    pageData.item === 7 ? 
                    <p
                     className="mobile-top"
                     style={{
                         marginTop: "3.5rem", 
                         cursor: "pointer",
                         color: "#868686",
                         width: "12rem",
                         fontSize: "1.6rem"
                        }}
                    ><i
                     className="fas fa-long-arrow-alt-down"
                     style={{
                         marginRight: "1rem", 
                         color: "#d44c4c", 
                         fontSize: "2.5rem"
                        }}
                    ></i>LOAD MORE</p> : null
                }
            </div>
    );
};


export default withRouter(ContentLeft);
