import React,{useState} from 'react'
import "./Signup.css"
import { useNavigate } from "react-router-dom"
import { useDispatch } from 'react-redux';
import { actionCreators } from '../Redux Store/index';
import { useSelector } from 'react-redux';

function Education() {
    let navigate = useNavigate();
    const [info,setInfo] = useState({})

    const singupInfo = useSelector(state=>state.reducer1);
    const personalInfo = useSelector(state=>state.reducer2);
    const educationInfo = useSelector(state=>state.reducer3);
    const dispatch = useDispatch();

    const handleChange= (event) => {
      dispatch(actionCreators.setEducationInfo({[event.target.name]: event.target.value}));
      setInfo({...singupInfo,...personalInfo,...educationInfo});
     }

     const handleClick = ()=>{
       navigate("/registered")
      
      console.log(info);
      dispatch(actionCreators.db(info))
      
      
      

    }

  return (
    <div>
    <div className="container">
       <div className="box">
         <h2> Educational Info </h2>
         <form action="/education" className="submit-data">
          <div className="input-box">
            <input type='text' name='university' id="university" onChange={handleChange} required/>
            <label htmlFor="university">University</label>
          </div>
          <div className="input-box">
            <input type='text' name='semester' id="semester" onChange={handleChange} required/>
            <label htmlFor="semester">Semester</label>
          </div>
          <div className="input-box">
            <input type='text' name='skills' id="skills" onChange={handleChange} required/>
            <label htmlFor="skills">Skills</label>
          </div>
          <button className="btn" onClick={handleClick}>Next</button>
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

export default Education