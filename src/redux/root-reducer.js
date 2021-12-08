import {combineReducers} from 'redux';

//importing all reducers
import galleryReducer from './reducer/galleryReducer';
import bollywoodLeftReducer from './reducer/bollywoodLeftReducer';
import hollywoodLeftReducer from './reducer/hollywoodLeftReducer';
import foodLeftReducer from './reducer/foodLeftReducer';
import technologyLeftReducer from './reducer/technologyLeftReducer';
import fitnessLeftReducer from './reducer/fitnessLeftReducer';
import blogContentReducer from './reducer/blogContentReducer';
import suggestReducer from './reducer/suggestReducer';


export default combineReducers({
    gallery:galleryReducer,
    bollywoodLeft:bollywoodLeftReducer,
    hollywoodLeft:hollywoodLeftReducer,
    technologyLeft:technologyLeftReducer,
    foodLeft:foodLeftReducer,
    fitnessLeft:fitnessLeftReducer,
    blogContent:blogContentReducer,
    suggest:suggestReducer
});


