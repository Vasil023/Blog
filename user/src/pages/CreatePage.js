import React, {useContext, useEffect, useState} from 'react'
import {useHttp} from '../hooks/http.hook'
import {ContextAuth} from '../context/ContextAuth'
import {useHistory} from 'react-router-dom'
import {GetAllPosts} from './GetAllPosts'


export const CreatePage = () => {
  const history = useHistory()
  const auth = useContext(ContextAuth)
  const {request} = useHttp()
  const [post, setPost] = useState('')

  useEffect(() => {
    window.M.updateTextFields()
  }, [])

  // const getData = (event) => {
  //   setPost({...post, [event.target.name]: event.target.value})
  // }
//Post запрос
  const pressHandler = async () => {
      try {
        await request('/api/post/posts', 'POST', {title: post}, {
          Authorization: `Bearer ${auth.token}`
        })
        history.push(`/post`)
      } catch (e) {}
    
  }

  return (
    <div className="row" style={{display: 'flex', flexDirection: 'column'}}>
      <div className="col s8 offset-s2" style={{paddingTop: '2rem'}}>
        <div className="input-field">
          <input
            placeholder="Введите текст"
            id="title"
            name="title"
            type="text"
            // value={post}
            onChange={e => setPost(e.target.value)}
            // onKeyPress={pressHandler}
          />
          <label htmlFor="link">О чем вы думаете</label>
        </div>
        <button  onClick={pressHandler} >Add</button>
      </div>
      <div>
      <GetAllPosts />
      </div>
    </div>
   
  )
}
