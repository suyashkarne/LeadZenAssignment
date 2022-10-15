import React, { useState } from 'react'

export default function CompletedTasks(props) {
  const[flag,setFlag]=useState(0)
  const handleView=()=>{
    console.log(props.completedtasks)
    if(flag===1)
    setFlag(0);
    else
    setFlag(1);
  }
  return (
    <div>
        <button className='btn btn-success btn-lg btn-block' style={{margin:'auto',display:'block'}} onClick={handleView}>{flag===1?'Hide Completed Tasks':'View Completed Tasks'}</button>
{      flag===1 && props.completedtasks.length>0?
        <ul className="list-group d-block p-5">
        { props.completedtasks.map((item)=>{ return(<li className="list-group-item displaylist" key={item}><span className='a'>{item}</span>
        </li>)})}  
        </ul>: ''
}
{
   flag===1 && props.completedtasks.length===0?
   <div>
   <br></br>
   <p align="center">No completed tasks</p>
   </div>:''
   
}
       
        

    </div>
  )
}
