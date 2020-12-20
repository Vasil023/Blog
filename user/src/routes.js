import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import {Post} from './pages/Posts'
import { CreatePage } from './pages/CreatePage'
import { AuthPage } from './pages/AuthPage'

export const useRoutes = isAuthenticated => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route path="/post" exact>
          <Post />
        </Route>
        <Route path="/create" exact>
          <CreatePage />
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