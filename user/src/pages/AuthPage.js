import React, { useContext, useEffect, useState } from 'react'
import { useError } from '../hooks/error.hook'
import { useHttp } from '../hooks/http.hook'
import {ContextAuth} from '../context/ContextAuth'

export const AuthPage = () => {
  const auth = useContext(ContextAuth)
  const message = useError()
  const {loading, request, error, clearError} = useHttp()
  const [form, setForm] = useState({
    email: '', password: ''
   })

   useEffect(() => {
    message(error)
    clearError()
   }, [error, message, clearError])

   useEffect( () => {
    window.M.updateTextFields()
   }, [])

   const changeHandler = event => {
     setForm({...form, [event.target.name]: event.target.value})
   }
   const reqisterHandler = async () => {
     try {
      const data = await request('/api/auth/register', 'POST', {...form })
      message(data.message)
     } catch (e) {}
   }

   const loginHandler = async () => {
    try {
     const data = await request('/api/auth/login', 'POST', {...form })
     auth.login(data.token, data.userId)
    } catch (e) {}
  }


  return (
    <div className="row">
      <div className="col s6 offset-s3">
        <h1>Register</h1>
        <div className="card blue-grey darken-1">
        <div className="card-content white-text">
          <span className="card-title">Авторизация</span>
          <div className="input-field">
            <input
              placeholder="Введите email" 
              id="email"
              type="text"
              className="validate"
              name="email"
              onChange={changeHandler}
              />
            <label htmlFor="first_name">Введите email</label>
           </div>

           <div className="input-field">
            <input
              placeholder="Введите пароль" 
              id="password"
              type="password"
              className="validate"
              name="password"
              onChange={changeHandler}
              />
            <label htmlFor="first_name">Введите пароль</label>
           </div>

        </div>
        <div className="card-action">
          <button
           className="btn  yellow darken-4" 
           style={{marginRight: 10}}
           disabled={loading}
           onClick={loginHandler}
           >
             Вход
             </button>
          <button
           className="btn grey darken-1"
           onClick={reqisterHandler}
           disabled={loading}
           >
             Регистрация
             </button>
        </div>
      </div>

      </div>
    </div>
  )
}