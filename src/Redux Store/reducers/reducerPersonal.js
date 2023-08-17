const initialState = {
    phone:"",
    dateOfBirth:"",
    address:""
}

const reducerPersonalInfo =(state = initialState, action)=>{
    if(action.type === "setPersonalInfo"){
        return({...state,...action.payload});
    }else{
       return state;
    }
}

export default reducerPersonalInfo