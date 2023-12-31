import React from 'react'
import "./Signup.css"
import { useNavigate } from "react-router-dom"
import { useDispatch } from 'react-redux';
import { actionCreators } from '../Redux Store/index';
import { useSelector } from 'react-redux';

function Personal() {
    let navigate = useNavigate();

    const personalInfo = useSelector(state=>state.reducer2);
    const dispatch = useDispatch();

    const handleChange= (event) => {
      dispatch(actionCreators.setPersonalInfo({[event.target.name]: event.target.value}));
     }

  return (
    <div>
    <div className="container">
       <div className="box">
         <h2> Personal Info </h2>
         <form action="/personal" className="submit-data">
          <div className="input-box">
            <input type='number' id="phone" name='phone' onChange={handleChange} required/>
            <label htmlFor="phone">Phone Number</label>
          </div>
          <div className="input-box">
            <input type='text' id="dateOfBirth" name='dateOfBirth' onChange={handleChange} required/>
            <label htmlFor="dateOfBirth">Date of Birth</label>
          </div>
          <div className="input-box">
            <input type='text' name='address' id="address" onChange={handleChange} required/>
            <label htmlFor="address">Address</label>
          </div>
          <button className="btn" onClick={()=>{navigate('/education');console.log(personalInfo);}}>Next</button>
         </form>
       </div>
       <span style={{"--i":0}}></span>
       <span style={{"--i":1}}></span>
       <span style={{"--i":2}}></span>
       <span style={{"--i":3}}></span>
       <span style={{"--i":4}}></span>
       <span style={{"--i":5}}></span>
       <span style={{"--i":6}}></span>
       <span style={{"--i":7}}></span>
       <span style={{"--i":8}}></span>
       <span style={{"--i":9}}></span>
       <span style={{"--i":10}}></span>
       <span style={{"--i":11}}></span>
       <span style={{"--i":12}}></span>
       <span style={{"--i":13}}></span>
       <span style={{"--i":14}}></span>
       <span style={{"--i":15}}></span>
       <span style={{"--i":16}}></span>
       <span style={{"--i":17}}></span>
       <span style={{"--i":18}}></span>
       <span style={{"--i":19}}></span>
       <span style={{"--i":20}}></span>
       <span style={{"--i":21}}></span>
       <span style={{"--i":22}}></span>
       <span style={{"--i":23}}></span>
       <span style={{"--i":24}}></span>
       <span style={{"--i":25}}></span>
       <span style={{"--i":26}}></span>
       <span style={{"--i":27}}></span>
       <span style={{"--i":28}}></span>
       <span style={{"--i":29}}></span>
       <span style={{"--i":30}}></span>
       <span style={{"--i":31}}></span>
       <span style={{"--i":32}}></span>
       <span style={{"--i":33}}></span>
       <span style={{"--i":34}}></span>
       <span style={{"--i":35}}></span>
       <span style={{"--i":36}}></span>
       <span style={{"--i":37}}></span>
       <span style={{"--i":38}}></span>
       <span style={{"--i":39}}></span>
       <span style={{"--i":40}}></span>
       <span style={{"--i":41}}></span>
       <span style={{"--i":42}}></span>
       <span style={{"--i":43}}></span>
       <span style={{"--i":44}}></span>
       <span style={{"--i":45}}></span>
       <span style={{"--i":46}}></span>
       <span style={{"--i":47}}></span>
       <span style={{"--i":48}}></span>
       <span style={{"--i":49}}></span>
       </div>
    </div>
  )
}

export default Personal