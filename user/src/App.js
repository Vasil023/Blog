import React from 'react'
import { BrowserRouter as Router} from 'react-router-dom'
import { useRoutes } from './routes';
import { useAuth } from './hooks/auth';
import {ContextAuth} from './context/ContextAuth'
import 'materialize-css'

function App() {
  const {token, login, logout, userId} = useAuth()
  const isAuth = !!token
  const routes = useRoutes(isAuth)
  return (
    <ContextAuth.Provider value={{
      token, login, logout, userId, isAuth
    }}>
      <Router>
      <div className="container">
      {routes}
      </div>
      </Router>
    </ContextAuth.Provider>
    
  )
}

export default App;
