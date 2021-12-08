const initState={
    content:{}
}


const blogContentReducer=(state=initState,action)=>{
    if(action.type==="GET_CONTENT"){
        return{
            content:action.payload
        }
    }
    return state
}

export default blogContentReducer;