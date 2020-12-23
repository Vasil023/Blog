import React, {useContext, useEffect, useState} from 'react'
import {useHttp} from '../../hooks/http.hook'
import {ContextAuth} from '../../context/ContextAuth'
import {useHistory} from 'react-router-dom'
import {GetAllPosts} from '../GetAllPosts/GetAllPosts'

import './CreatePage.css'


export const CreatePage = () => {
  const history = useHistory()
  const auth = useContext(ContextAuth)
  const {request} = useHttp()
  const [post, setPost] = useState({
    title: '', 
    user: auth.userID,
    nickName: auth.nickName
  })

  useEffect(() => {
    window.M.updateTextFields()
  }, [])

  const getData = (event) => {
    setPost({...post, [event.target.name]: event.target.value})
  }
//Post запрос
  const pressHandler = async () => {
      try {
       await request('/api/post/posts', 'POST', {...post}, {
          Authorization: `Bearer ${auth.token}`
        })
        history.push(`/post`)
      } catch (e) {}
    
  }

  return (
    <div className="row">
      <div className="col s8 offset-s2 input-wrapper" style={{paddingTop: '2rem'}}>
        <div className="input-field">
          <input
            placeholder="Введите текст"
            id="title"
            name="title"
            type="text"
            data-length="120"
            onChange={getData}
          />
          <label htmlFor="title">О чем вы думаете</label>
        </div>
        <button className="waves-effect waves-light btn" onClick={pressHandler} >Add Post</button>
      </div>
      <div>
      <GetAllPosts />
      </div>
    </div>
   
  )
}
