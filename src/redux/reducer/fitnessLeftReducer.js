const initState={
    pagename:"Fitness",
    pageLeftData:[]
}


const fitnessLeftReducer=(state=initState,action)=>{
    if(action.type==="FITNESS_API_CALL"){
        return {
            ...state,
            pageLeftData:action.payload
        }
    }
    return state;
}

export default fitnessLeftReducer;