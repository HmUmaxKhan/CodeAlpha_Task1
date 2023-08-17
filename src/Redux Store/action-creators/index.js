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