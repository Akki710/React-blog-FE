const initState={
    pagename:"Hollywood",
    pageLeftData:[]
}


const hollywoodLeftReducer=(state=initState,action)=>{
    if(action.type==="HOLLYWOOD_API_CALL"){
        return {
            ...state,
            pageLeftData:action.payload
        }
    }
    return state;
}

export default hollywoodLeftReducer;