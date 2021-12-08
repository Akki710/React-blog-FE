const initState={
    pagename:"Bollywood",
    pageLeftData:[]
}


const bollywoodLeftReducer=(state=initState,action)=>{
    if(action.type==="API_CALL"){
        return {
            ...state,
            pageLeftData:action.payload
        }
    }
    return state;
}

export default bollywoodLeftReducer;