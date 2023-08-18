export const setSignUpInfo = (singupInfo)=>{
    return({
        type: 'setSignupInfo',
        payload:singupInfo
    })
}
export const setPersonalInfo = (personalInfo)=>{
    return({
        type: 'setPersonalInfo',
        payload: personalInfo
    })
}
export const setEducationInfo = (educationInfo)=>{
    return({
        type: 'setEducationInfo',
        payload: educationInfo
    })
}

export const db = (info)=>{
    return  async(dispatch)=>{
    let response = await fetch("http://localhost:5000/api/form/info",{
        method:'POST',
    headers:{
        "content-type": "application/json"
    },
     body : JSON.stringify(info)
    });
    if (response.ok) {
        let data = await response.json();
        console.log(data);
    }
    else{
        console.error('Failed to post', response.statusText);
    }

    return Promise.resolve();
}}