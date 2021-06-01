import React, { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import Timepicker from 'react-time-picker'
import 'react-clock/dist/Clock.css'
import Chips, {Chip} from 'react-chips'
import { Link } from 'react-router-dom'
import { idGeneration } from '../logic/idGeneration';

export const CreateTask = () => {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [deadlineEnabled, setDeadlineEnabled] = useState('');
  const [deadlineDate, setDeadlineDate] = useState(new Date());
  const [deadlineTime, setDeadlineTime] = useState('04:20');
  const [tags, setTags] = useState([]);

  const formChange = (event) => {
    setTaskName(event.target.value);
  }

  const descriptionChange = (event) => {
    setTaskDescription(event.target.value);
  }

  const deadlineClick = (event) => {
    deadlineEnabled==='' ? setDeadlineEnabled('checked') : setDeadlineEnabled('')
  }

  let calendarAndDate;
  if (deadlineEnabled==='checked') {
    calendarAndDate = (
      <div>
        <Calendar
          className='col s4'
          onChange={setDeadlineDate}
          value={deadlineDate}
        />
  
        <Timepicker 
          className='col s3'
          onChange={setDeadlineTime}
          value={deadlineTime}
        />
      </div>
    )
  }
  
  const addTaskButtonHandler = (event) => {
    if (localStorage.getItem('localTasks') === null) {
      localStorage.setItem('localTasks', JSON.stringify({tasks: []}));
    }
    let localTasks = JSON.parse(localStorage.getItem('localTasks'));
    localTasks.tasks.push({
      taskName,
      taskDescription,
      deadlineEnabled,
      deadlineDate,
      deadlineTime,
      tags,
      isDone: false,
      id: idGeneration(),
    });
    console.log(localTasks.tasks)
    localStorage.setItem('localTasks', JSON.stringify(localTasks));
  }

  return (
    <div>
      <h3>Add new task</h3>

      <div className="row">
        <div className="input-field col s6">
          <input id="first_name2" 
              type="text" 
              value={taskName} 
              onChange={formChange} />
          <label className="active" for="first_name2">Taks name</label>
        </div>
      </div>

      <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s12">
              <textarea 
                  id="textarea1" 
                  className="materialize-textarea" 
                  value={taskDescription} 
                  onChange={descriptionChange}>
              </textarea>
              <label for="textarea1">Enter full discription</label>
            </div>
          </div>
        </form>
      </div>

      <div className="row">
        <label className="col s1">
          <input type="checkbox" checked={deadlineEnabled} onClick={deadlineClick}/>
          <span>Deadline</span>
        </label>
        {calendarAndDate}
      </div>

      <h4>Tags:</h4>
      <Chips 
        value={tags}
        onChange={setTags}
        placeholder='input tags'
      />
      
      <Link to='/'>
        <button 
          className="waves-effect waves-light btn"
          onClick={addTaskButtonHandler}>
            Add task
        </button>
      </Link>
      
    </div>
  )
}