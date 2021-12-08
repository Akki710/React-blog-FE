import React from 'react'
import {useDispatch} from 'react-redux';


//importing actions
import {suggestAction} from '../../redux/actions/suggestAction';

//importing styles
import "../../styles/categoryContent.scss";

//imporing components
import ContentLeft from './ContentLeft';
import ContentRight from './ContentRight';




const CategoryContent = ({pageLeftData,pageName}) => {
    const dispatch=useDispatch();
    dispatch(suggestAction(pageLeftData));
    return (
        <div className="blog-menu">
            <div>
            {
                pageLeftData.map(pageData => (
                    <ContentLeft
                     key={pageData.item}
                     pageData={pageData} 
                     pageName={pageName} 
                    />
                ))
            }
            </div>
            <div>
            {
                pageLeftData.filter(pageData => pageData.rank === "top").map(pageData => (
                    <ContentRight
                     key={pageData.item}
                     pageData={pageData} 
                    />
                ))
            }
            </div>
        </div>
    )
}


export default CategoryContent;