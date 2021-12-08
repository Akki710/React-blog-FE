const initState={
    suggest:{}
}


const suggestReducer=(state=initState,action)=>{
    if(action.type==="SUGGEST"){
        return {
            suggest:action.payload
        }
    }
    return state;
}

export default suggestReducer;