import React, {useCallback, useContext, useState, useEffect} from 'react'
import { useHttp } from '../hooks/http.hook'
import { ContextAuth } from '../context/ContextAuth'
import {Loader} from '../components/Loader'
import { PostPage } from './PostPage'

export const GetAllPosts = () => {
    const {token} = useContext(ContextAuth)
    const {request, loading} = useHttp()
    const [post, setPost] = useState(null)

  const getAllPost = useCallback( async () => {
    try {
      const posts = await request(`/api/post/all`, 'GET', null, {
        Authorization: `Bearer ${token}`
      })
      console.log(posts)
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
       {!loading && post && <PostPage post={post} />}
        </>
    )
}