import React, {useCallback, useContext, useState, useEffect} from 'react'
import { useHttp } from '../../hooks/http.hook'
import { ContextAuth } from '../../context/ContextAuth'
import {Loader} from '../../components/Loader'
import { PostPage } from '../PostPage/PostPage'
import { MyProfile } from '../../components/MyProfile/MyProfile'

import './GetUserPost.css'

export const GetUserPost = () => {
    const {token} = useContext(ContextAuth)
    const {request, loading} = useHttp()
    const [post, setPost] = useState(null)

  const getAllPost = useCallback( async () => {
    try {
      const posts = await request(`/api/post/`, 'GET', null, {
        Authorization: `Bearer ${token}`
      })
      setPost(posts)
    } catch (e){}
  }, [token, request])

  useEffect(() => {
    getAllPost()
  }, [getAllPost])

  if (loading) {
    return <Loader />
  }
  
  return (
    <>
    <div className="row">
    <div className="col  s3 user">
      {!loading && post && <MyProfile post={post} />}
    </div>
    <div className="col s7">
      {!loading && post && <PostPage post={post} />}
    </div>
    </div>
    
    </>
  )
}