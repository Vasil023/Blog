import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import {GetUserPost} from './pages/GetUserPost/GetUserPost'
import { CreatePage } from './pages/CreatePage/CreatePage'
import { AuthPage } from './pages/AuthPage/AuthPage'
import { GetAllUser } from './pages/GetAllUser/GetAllUser'

export const useRoutes = isAuthenticated => {
  if (isAuthenticated) {
    return (
      <Switch>
        {/* <Route path="/post" exact>
          <GetUserPost />
        </Route> */}
        <Route path="/create" exact>
          <CreatePage />
        </Route>
        <Route path="/all" exact>
          <GetUserPost />
        </Route>
        <Route path="/users" exact>
          <GetAllUser />
        </Route>
        <Redirect to="/create" />
      </Switch>
    )
  }
  return (
    <Switch>
      <Route to="/" exact>
        <AuthPage />
      </Route>
      <Redirect to="/" />
    </Switch>
  )
}