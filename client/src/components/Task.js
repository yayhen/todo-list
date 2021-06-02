import React, { useState } from 'react'
import {doneTask} from '../logic/doneTask'
import {deleteTask} from '../logic/deleteTask'
import { Chip } from './Chip';

export const Task = (props) => {
  const [taskHeight, setTAskHeight] = useState('120px');
  let taskNameStyle = 'none'
  if(props.value.isDone===true) {
    taskNameStyle = 'line-through';
  }
  const [taskNameDecoration, setTaskNameDecoration] = useState(taskNameStyle);
  const [displayTask, setDisplayTask] = useState('');
  
  const deadlineEnabled = (props.value.deadlineEnabled==='checked')
                          ? 
                          props.value.deadlineDate.slice(0, 10)+' '+ props.value.deadlineTime 
                          :
                          'no deadline';
  
  let chips = [];
  props.value.tags.forEach(element => {
    chips.push(<Chip value={element}/>)
  });
  
  return (
    <div className="card" style={{height: taskHeight, display: displayTask}}>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4" 
          onClick={()=> setTAskHeight('300px')} 
          style={{textDecoration: taskNameDecoration}}>
            {props.value.taskName}
          <i className="material-icons right" >
            more_vert 
          </i>
        </span>
        <p>Deadline: {deadlineEnabled}</p>
        {chips}
      </div>
      <div className="card-reveal" style={{overflow: 'auto'}}>
        <span className="card-title grey-text text-darken-4"  
            onClick={()=> setTAskHeight('120px')}
            style={{textDecoration: taskNameDecoration}}>{props.value.taskName}<i className="material-icons right">close</i></span>
        <p>{props.value.taskDescription}</p>
        <button className="waves-effect waves-light btn"
            onClick={() => {
              doneTask(props.value.id)
              setTaskNameDecoration('line-through')}}>Done</button>
        <button className="waves-effect waves-light btn red darken-3" 
            onClick={() => {
              deleteTask(props.value.id);
              setDisplayTask('none')}}>
          Delete
        </button>
      </div>
    </div>
  )
}