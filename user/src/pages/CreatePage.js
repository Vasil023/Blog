import React, {useContext, useEffect, useState} from 'react'
import {useHttp} from '../hooks/http.hook'
import {ContextAuth} from '../context/ContextAuth'
import {useHistory} from 'react-router-dom'
import {Post} from './Posts'

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
        history.push(`/post/${data.post._id}`)
        console.log(data)
      } catch (e) {}
    }
  }

  return (
    <div className="row">
      <div className="col s8 offset-s2" style={{paddingTop: '2rem'}}>
        <div className="input-field">
          <input
            placeholder="Вставьте ссылку"
            id="link"
            type="text"
            value={post}
            onChange={e => setPost(e.target.value)}
            onKeyPress={pressHandler}
          />
          <label htmlFor="link">Введите ссылку</label>
        </div>
      </div>
       <Post />
    </div>
   
  )
}































// import React, {useState, useEffect, useContext} from 'react'
// import {ContextAuth} from '../context/ContextAuth'
// // import { post } from '../../../routes/post.routes'
// import { useHttp } from '../hooks/http.hook'

// export const CreatePage = () => {
//   const auth = useContext(ContextAuth)
//   const {request} = useHttp()
//   const [form, setForm] = useState('')

//   useEffect( () => {
//     window.M.updateTextFields()
//    }, [])
 
//   const postForm = async event => {
//     if (event.key === 'Enter') {
//       try {
//         const data = await request('/api/post/posts', 'POST', {title: form}, {
//           Authorization: `Bearer ${auth.token}`
//         })
//         console.log(data)
//       } catch (e) {}
//     }
//   }
//   return (
//     <div className="row">
//       <div className="input-field col s6">
//         <input
//          id="input_text" 
//          type="text"
//          data-length="10"
//          name="title"
//          onChange={e => setForm(e.target.value)}
//          onKeyPress={postForm}
//          />
//         <label htmlFor="input_text">Input text</label>
//       </div>
//       <div className="card-action">
//         <button
//          className="btn  yellow darken-4" 
         
//          >
//            Send  
//         </button>
//       </div>
//     </div>

   
//   )
// }