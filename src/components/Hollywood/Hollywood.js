import React from 'react';
import { useSelector } from 'react-redux';



//importing components
import Header from '../Header/Header';
import CategoryContent from '../CategoryContent/CategoryContent';


const Hollywood = () => {
    const pageName=useSelector(state=>state.hollywoodLeft.pageName);
    const pageLeftData=useSelector(state=>state.hollywoodLeft.pageLeftData);
    return (
        <div>
            <Header />
            <div className="hollywood">  
            <CategoryContent
             pageName={pageName}
             pageLeftData={pageLeftData}
            />
        </div>
        </div>
    )
}

export default Hollywood;