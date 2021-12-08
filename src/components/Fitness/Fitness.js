import React from 'react';
import { useSelector } from 'react-redux';


//importing components
import Header from '../Header/Header';
import CategoryContent from '../CategoryContent/CategoryContent';



const Fitness = () => {
    const pageName=useSelector(state=>state.fitnessLeft.pageName);
    const pageLeftData=useSelector(state=>state.fitnessLeft.pageLeftData);
    return (
        <div>
            <Header />
            <div className="fitness">
                <CategoryContent
                pageName={pageName}
                pageLeftData={pageLeftData}
                />
            </div>
        </div>
    )
}

export default Fitness;