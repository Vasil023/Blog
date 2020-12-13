import React from 'react'
import {Switch, Route} from 'react-router-dom'
import { PostsPage } from './src/pages/PostsPage'

export const useRoutes = isAuthenticated => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route to="posts" exact>
          <PostsPage /> 
        </Route>
      </Switch>
    )
  }
  return (
    <Switch>

    </Switch>
  )
}