import {createStore} from 'redux';

//importing root reducer
import rootReducer from './root-reducer';


const store=createStore(rootReducer);


export default store;
