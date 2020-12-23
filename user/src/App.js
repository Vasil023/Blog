import React from 'react'
import { BrowserRouter as Router} from 'react-router-dom'
import { useRoutes } from './routes';
import { useAuth } from './hooks/auth';
import {ContextAuth} from './context/ContextAuth'
import 'materialize-css'
import { Navbar } from './components/NavBar/navbar';

function App() {
  const {token, login, logout, userId} = useAuth()
  const isAuth = !!token
  const routes = useRoutes(isAuth)
  return (
    <ContextAuth.Provider value={{
      token, login, logout, userId, isAuth
    }}>
      <Router>
        {isAuth && <Navbar />}
        <div className="wrraper" style={{backgroundColor: "#f5f8fa"}}>
        <div className="container">
      {routes}
      </div>
        </div>
      </Router>
    </ContextAuth.Provider>
    
  )
}

export default App;
