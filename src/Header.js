import React, { useState } from 'react';
import Lists from './Lists'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

export default function Header() {

  const [task,setTask]=useState();
  const[empty,setEmpty]=useState(null);

    const handleClick=()=>{
      let a=document.getElementById('taskdata').value
      setTask(
        a
      )
      document.getElementById('taskdata').value=null;
      setEmpty(null)

    }

    const handleChange=()=>{
      setEmpty(document.getElementById('taskdata').value)
    }

    return (
    <>
    <div className='header'><h1 style={{color:'#E107FF' }}>TODO Application</h1></div>
    <div>
    <input className='input col-sm-8 form-control-lg' type='text' id='taskdata' onChange={handleChange}></input>
    <input type='button' disabled={empty===null?true:false}className="button btn btn-primary btn-lg" value='Add Task' onClick={handleClick} ></input>
    </div>
    <Lists taskdata={task} id='taskdata'></Lists>
    
    </>
  )
}
