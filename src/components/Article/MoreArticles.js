import React from 'react';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router';


//importing actions
import { blogContentAction } from '../../redux/actions/blogContentAction';

//importing styles
import "../../styles/moreArticle.scss";





const MoreArticles = ({suggest,history}) => {
    const dispatch=useDispatch();
    return (
        <div className="blog-feature">
            <div className="blog-margin">
            <h2 className="blog-margin-head">More From The Siren</h2>
            <hr className="blog-feature-hr" />
            <div className="feature-cards">
                {
                    suggest
                    .filter(card => card.item>1 && card.item<5)
                    .map((card, index) => (
                        <div
                        onClick={() => {
                            dispatch(blogContentAction(card));
                            history.push(`${card.title}`);
                        }}
                         key={index} 
                         className="card"
                        >
                            <p className="related">Related Search</p>
                            <div className="card-content-wrap">
                                <img
                                 className="card-image" 
                                 src={card.imageUrl} alt="blogImage" />
                                <div className="card-text">
                                    <h2>{card.title}</h2>
                                    <div className="card-author">
                                    <i className="card-author-image far fa-user-circle"></i>
                                        <div className="card-author-text">
                                            <p>{card.author}</p>
                                            <p className="card-author-date">{card.date}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
        </div>
    )
}

export default withRouter(MoreArticles);