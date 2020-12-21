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
//Post запрос
  const pressHandler = async event => {
    if (event.key === 'Enter') {
      try {
        const data = await request('/api/post/posts', 'POST', {title: post}, {
          Authorization: `Bearer ${auth.token}`
        })
        history.push(`/post`)
        console.log(data)
      } catch (e) {}
    }
  }

  return (
    <div className="row" style={{display: 'flex', flexDirection: 'column'}}>
      <div className="col s8 offset-s2" style={{paddingTop: '2rem'}}>
        <div className="input-field">
          <input
            placeholder="Введите текст"
            id="link"
            type="text"
            value={post}
            onChange={e => setPost(e.target.value)}
            onKeyPress={pressHandler}
          />
          <label htmlFor="link">О чем вы думаете</label>
        </div>
      </div>
      <div>
      <GetAllPosts />
      </div>
    </div>
   
  )
}
