import React from 'react';
import { useSelector } from 'react-redux';


//importing components
import Header from '../Header/Header';
import CategoryContent from '../CategoryContent/CategoryContent';




const Technology = () => {
    const pageName=useSelector(state=>state.technologyLeft.pageName);
    const pageLeftData=useSelector(state=>state.technologyLeft.pageLeftData);
    return (
        <div>
            <Header />
            <div className="technology">  
            <CategoryContent 
             pageName={pageName}
             pageLeftData={pageLeftData}
            />
        </div>
        </div>
    )
}

export default Technology;