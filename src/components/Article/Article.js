import React from 'react';
import { useSelector } from 'react-redux';

//importing component
import Header from '../Header/Header';
import MoreArticles from './MoreArticles';

//importing styles
import "../../styles/article.scss";



const Article = () => {
    const content=useSelector(state=>state.blogContent.content);
    const suggest=useSelector(state=>state.suggest.suggest);
    return (
        <div>
            <Header />
        <div className="blog-content">
            <div className="left-grid">
            <i className="left-point far fa-heart"> Likes</i>
            <i className="left-point fas fa-share-alt-square"> Share</i>
            </div>
            <div className="right-grid">
                <h1 className="blog-title">{content.title}</h1>
                <div className="author">
                    <div className="author-brief">
                        <div className="author-brief-image">
                        <i className="auhtor-point far fa-user-circle"></i>
                        </div>
                        <div className="author-brief-text">
                        <h3>{content.author}</h3>
                        <p className="author-date">{content.date} 5 min read</p>
                        </div>
                    </div>
                    <div className="social-handle">
                    <i className="social-point fab fa-facebook"></i>
                    <i className="social-point fab fa-twitter"></i>
                    <i className="social-point fab fa-linkedin"></i>
                    <i className="social-point fab fa-youtube"></i>
                    </div>
                </div>
                <div className="blog-description">
                    <div className="blogImage-div">
                    <img className="blogImage" src={content.imageUrl} alt="blogImage" />
                    </div>
                    <p className="desc-para">{content.paraOne}</p>
                    <p className="desc-para">{content.paraTwo}</p>
                </div>
                <div className="blog-tags">
                    <p className="tag">{content.tagOne}</p>
                    <p className="tag">{content.tagTwo}</p>
                    <p className="tag">{content.tagThree}</p>
                </div>
                <div className="blog-clap">
                    <i className="blog-point far fa-heart"> Likes</i>
                </div>
                <hr className="author-hr-1" />
                <div className="blog-author">
                    <div className="blog-author-image">
                        <i className="blog-auhtor-point far fa-user-circle"></i>
                    </div>
                    <div className="blog-author-text">
                        <p className="blog-shadow">WRITTEN BY</p>
                        <h3 className="author-name">{content.author}</h3>
                        <p className="blog-shadow">{content.date} 5 min read</p>
                    </div>
                </div>
                <hr className="author-hr" />
            </div>
        </div>
            <MoreArticles suggest={suggest} /> 
        </div>
    )
}


export default Article;