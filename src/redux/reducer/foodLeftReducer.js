const initState={
    pagename:"Food",
    pageLeftData:[]
}


const foodLeftReducer=(state=initState,action)=>{
    if(action.type==="FOOD_API_CALL"){
        return {
            ...state,
            pageLeftData:action.payload
        }
    }
    return state;
}

export default foodLeftReducer;