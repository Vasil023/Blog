import React, { useCallback, useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Loader } from '../components/Loader'
import { ContextAuth } from '../context/ContextAuth'
import { useHttp } from '../hooks/http.hook'

// import PostPage from './PostPage'

export const Post = () => {
  const {token} = useContext(ContextAuth)
  const {request, loading} = useHttp()
  const [post, setPost] = useState(null)
  const postId = useParams().id
  const getPost = useCallback( async () => {
  const posts = await request(`/api/post/${postId}`, 'GET', null, {
      Authorization: `Bearer ${token}`
    })
    setPost([posts])
  }, [token, postId, request])

  useEffect(() => {
    getPost()
  }, [getPost])
  if (loading) {
    return <Loader />
  }

  return (
  <>
  {post}

  </>
  )
}

