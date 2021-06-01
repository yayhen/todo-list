import React from 'react'
import { Link } from 'react-router-dom'
import { CreateTask } from './CreateTask'

export const MainPage = () => {
  return (
      <div>
        <Link to='/newTask'>
          <button className="waves-effect waves-light btn">Create task</button>
        </Link>
        <br />
        <Link to='/localTasks'>
        <button className="waves-effect waves-light btn">view local tasks</button>
        </Link>
      </div>
  )
}