import {createContext} from 'react'

function no() {}

export const ContextAuth = createContext({
  token: null,
  userID: null,
  login: no,
  logout: no,
  isAuth: false

})