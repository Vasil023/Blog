import React, {useCallback, useContext, useState, useEffect} from 'react'
import { useHttp } from '../../hooks/http.hook'
import { ContextAuth } from '../../context/ContextAuth'
import {Loader} from '../../components/Loader'
import { AllUsers } from '../../components/AllUsers/AllUsers'

export const GetAllUser = () => {
    const {token} = useContext(ContextAuth)
    const {request, loading} = useHttp()
    const [user, setUser] = useState(null)

  const GetAllUser = useCallback( async () => {
    try {
      const users = await request(`/api/post/alluser`, 'GET', null, {
        Authorization: `Bearer ${token}`
      })
      setUser(users)
    } catch (e){}
  }, [token, request])

  useEffect(() => {
    GetAllUser()
  }, [GetAllUser])

  if (loading) {
    return <Loader />
  }

  return (
    <>
    <div>
    {!loading && user && <AllUsers user={user} />}
    </div>
   
    </>
)
}

