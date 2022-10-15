import React from 'react'
import { useState,useEffect,useCallback } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';


import Display from './Display';

export default function Form(props) {
  const [info,setInfo]=useState({
    firstName:"" ,
    lastName:"",
    middleName:"",
    gender:"",
    phno:"",
    email:"",
    show:false
  }
  )
  
      const handleChange=(event)=>{
        console.log(event.target.value);
           setInfo((prevState)=>(
            {
            ...prevState,
            [event.target.name]:event.target.value
           }))
          }
          
          useEffect(() => {
            props.information(info)
          },[info]);    

  // const display=()=>{
  //  setInfo((prevState)=>(
  //    {
  //      ...prevState,
  //      show:!prevState.show
  //    }
  //  ))
  //  props.information(info)
   
  // }

  return (
    <div>
        <form autoComplete="off">
        <label>First Name <input type='text' name='firstName' value={info.firstName} onChange={handleChange}  /></label><br/><br/>
        <label>Middle Name <input type='text' name='middleName' value={info.middleName} onChange={handleChange} /></label><br/><br/>
        <label>Last Name <input type='text' name='lastName' value={info.lastName} onChange={handleChange} /></label><br/><br/>
        <label>Gender :</label><input type='radio' name='gender' value='Male' onChange={handleChange} />Male
        <input type='radio' name='gender' value='Female' onChange={handleChange} />Female<br/><br/>
        <label>Phone no <input type='text' name='phno' value={info.phno} onChange={handleChange} /></label><br/><br/>
        <label>Email Id <input type='text' name='email' value={info.email} onChange={handleChange} /></label><br/><br/> 
        <Link to="/display"> <button type='button'>Submit</button></Link>
        </form>
    </div>
    
  )
}
