const initState={
    pagename:"Technology",
    pageLeftData:[]
}


const technologyLeftReducer=(state=initState,action)=>{
    if(action.type==="TECH_API_CALL"){
        return {
            ...state,
            pageLeftData:action.payload
        }
    }
    return state;
}

export default technologyLeftReducer;