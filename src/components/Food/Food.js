import React from 'react';
import { useSelector } from 'react-redux';

//importing components
import Header from '../Header/Header';
import CategoryContent from '../CategoryContent/CategoryContent';


const Food = () => {
    const pageName=useSelector(state=>state.foodLeft.pageName);
    const pageLeftData=useSelector(state=>state.foodLeft.pageLeftData);
    return (
        <div>
            <Header />
            <div className="food">  
            <CategoryContent
             pageName={pageName}
             pageLeftData={pageLeftData}
            />
        </div>
        </div>
    )
}


export default Food;