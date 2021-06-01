import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { CreateTask } from './CreateTask'
import { LocalTasks } from './LocalTasks'
import { MainPage } from './MainPage'

export const StartPage = () => {
  return (
    <Router>

      <Switch>
        <Route path='/newTask'>
          <CreateTask />
        </Route>
        <Route path='/localTasks'>
          <LocalTasks />
        </Route>
        <Route path='/'>
          <MainPage />
        </Route>
      </Switch>
    </Router>
    
  )
}