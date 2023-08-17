const initialState = {
    name:"",
    email:"",
    password:""
}

const reducerSignUp =(state = initialState, action)=>{
    if(action.type === "setSignupInfo"){
        return({...state,...action.payload});
    }else{
       return state;
    }
}

export default reducerSignUp