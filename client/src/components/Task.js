import React, { useState } from 'react'
import {doneTask} from '../logic/doneTask'
import {deleteTask} from '../logic/deleteTask'

export const Task = (props) => {
  const [taskHeight, setTAskHeight] = useState('100px');
  let taskDoneStyle = 'none';
  if(props.value.isDone === true) {
    taskDoneStyle = 'line-through';
  } else {
    taskDoneStyle = 'none'
  }

  const doneTaskButtonHandler = (event) => {
    doneTask(props.value.id);
  }

  return (
    <div className="card" style={{height: taskHeight}}>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4" 
          onClick={()=> setTAskHeight('300px')} 
          style={{textDecoration: taskDoneStyle}}>
            {props.value.taskName}
          <i className="material-icons right" >
            more_vert 
          </i>
        </span>
        <p>Deadline: {props.value.deadlineDate.slice(0, 10)+' '+ props.value.deadlineTime}</p>
      </div>
      <div className="card-reveal" style={{overflow: 'auto'}}>
        <span className="card-title grey-text text-darken-4"  onClick={()=> setTAskHeight('100px')}>{props.value.taskName}<i className="material-icons right">close</i></span>
        <p>{props.value.taskDescription}</p>
        <button className="waves-effect waves-light btn" onClick={() => {doneTask(props.value.id)}}>Done</button>
        <button className="waves-effect waves-light btn red darken-3" onClick={() => deleteTask(props.value.id)}>Delete</button>
      </div>
    </div>
  )
}