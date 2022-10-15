import React, { useState,useEffect } from 'react';
import CompletedTasks from './CompletedTasks';
import  './Lists.css'
export default function Lists(props) {

    const [todotasks,setTodoTasks]=useState([]);
    const [completedtasks,setCompletedTasks]=useState([]);

    useEffect(() => {
      if(props.taskdata!==undefined)
      setTodoTasks(
        [...todotasks,props.taskdata]
      );
    },[props.taskdata]);

    
    const handleDelete=(item)=>{
      let array=[...todotasks];
      let index=array.indexOf(item);
      array.splice(index, 1);
      setTodoTasks(
        array
      )
    }

    const handleCompleteTask=(item)=>{
      setCompletedTasks(
        [...completedtasks,item]
      )
      handleDelete(item)
    }

  return (
    <>
    <div>
    <br></br>
        <ul className="list-group d-block p-5">
         { todotasks.map((item)=>{ return(<li className="list-group-item displaylist" key={item}><span className='a'>{item}
        </span><button className='mac btn btn-success' onClick={()=>handleCompleteTask(item)}>Mark as complete</button>
        <button className='del btn btn-danger' onClick={()=>handleDelete(item)}>Delete</button>
        </li>)})}
        </ul>
       <CompletedTasks completedtasks={completedtasks}></CompletedTasks>
    
    </div>
    </>
  )
}
