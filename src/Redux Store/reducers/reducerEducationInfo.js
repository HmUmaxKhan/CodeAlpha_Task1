const initialState = {
    university:"",
    semester:"",
    skills:""
}

const reducerEducationInfo = (state = initialState, action)=>{
    if(action.type === "setEducationInfo"){
        return({...state,...action.payload});
    }else{
       return state;
    }
}

export default reducerEducationInfo