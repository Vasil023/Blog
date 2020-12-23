import React, { useContext } from 'react'
import {NavLink, useHistory} from 'react-router-dom'
import { ContextAuth } from '../../context/ContextAuth'

import './NavBar.css'

export const  Navbar = () => {
  const history = useHistory()
  const auth = useContext(ContextAuth)
  const logoutHandler = event => {
    event.preventDefault()
    auth.logout()
    history.push('/')
  }
  return (
  <nav>
    <div className="nav-wrapper">
      <samp className="brand-logo center">Blog</samp>
      <ul id="nav-mobile" className="left hide-on-med-and-down">

        <li className="home-icon">
          <NavLink to="/create">
          <i className="fas fa-home-lg-alt"></i>
            Home
          </NavLink></li>

          <li className="home-icon">
          <NavLink to="/users">
          <i className="fas fa-users"></i>
            Users
          </NavLink></li>

        <li  className="user-icon">
          <NavLink to="/all">
          <i className="fas fa-user"></i>
            Me
            </NavLink></li>
            
        <li className="logout-icon">
        <NavLink to="/" onClick={logoutHandler}>
        <i className="far fa-sign-out-alt"></i>
        Log Out
        </NavLink>
        </li>
      </ul>
    </div>
  </nav>
  )
}