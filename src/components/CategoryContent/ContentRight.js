import React from 'react';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router';


//importing actions
import { blogContentAction } from '../../redux/actions/blogContentAction';



const ContentRight = ({pageData,history}) => {
    const dispatch=useDispatch();
    return (
        <div
         onClick={
            () => {
                dispatch(blogContentAction(pageData));
                history.push(`${history.location.pathname}/${pageData.title}`);
            }
            }
         className="blog-card-right">
            {
                pageData.item === 4 ?
                <div>
                    <h2 style={{fontSize: "2.5rem"}}>Top Posts</h2>
                    <hr className="bollywood-top-hr" /> 
                </div> : null
            }
            <div className={"blog-card-item-right " + (pageData.item !== 1 ? "blog-card-item-flex-right": "")}>
                <div className="blog-card-item-right-image">
                    {
                        pageData.item === 1 ?
                        <img
                         src={pageData.imageUrl}
                         alt="blogImage"
                         style={{height: "25rem", width: "35rem"}}
                        /> :
                        <img
                         src={pageData.imageUrl}
                         alt="blogImage"
                         style={{height: "12rem", width: "12rem"}}
                        />
                    }
                </div>
                    <div className="blog-card-item-text-right">
                        <div>
                        <p
                         className="blog-card-title-right"
                        >{pageData.title}</p>
                    
                        <p className="blog-card-category-right">{pageData.category} <span className="blog-card-span">{pageData.date}</span></p>
                        </div>
                        <div>
                            <p className="blog-number">{pageData.item}</p>
                        </div>
                    </div>
            </div>
                {
                    pageData.item !== 7 ? <hr className="blog-card-hr-right" /> : null
                }
                {
                    pageData.item ===7 ? 
                    <div className="blog-card-advertisement-right">
                        <p>Advertisement</p>
                    </div> : null
                }
        </div> 
    );
};


export default withRouter(ContentRight);
