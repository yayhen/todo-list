import React from 'react'
import { Task } from '../components/Task'
import { Link } from 'react-router-dom'

export const LocalTasks = () => {
  let tasks = [];
  tasks = JSON.parse(localStorage.getItem('localTasks')).tasks;
  let tasksRender = [];
  tasks.forEach((element, index) => {
    tasksRender.push(<Task value={tasks[index]} key={tasks[index].id}/>)
  });

  return (
    <div>
      {tasksRender}
      <Link to='/'>
        <button className="waves-effect waves-light btn">Back</button>
      </Link>
    </div>
  )
}