import {createContext} from 'react'

function no() {}

export const ContextAuth = createContext({
  token: null,
  nickName: null,
  userID: null,
  title: null,
  login: no,
  logout: no,
  isAuth: false

})