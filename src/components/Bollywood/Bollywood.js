import React from 'react';
import {useSelector} from 'react-redux';


//importing components
import Header from '../Header/Header';
import CategoryContent from '../CategoryContent/CategoryContent';


const Bollywood = () => {
    const pageName=useSelector(state=>state.bollywoodLeft.pageName);
    const pageLeftData=useSelector(state=>state.bollywoodLeft.pageLeftData);

    return (
        <div>
            <Header />
            <div className="bollywood">  
            <CategoryContent 
             pageName={pageName}
             pageLeftData={pageLeftData}
            />
        </div>
        </div>
    )
}


export default Bollywood;