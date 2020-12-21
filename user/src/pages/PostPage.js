import React from 'react'
import { MyProfile } from '../components/MyProfile'

export const PostPage = ({post}) => {
  
  const element = post.map((item) => {
    console.log(item)
    return (
      <>
        <div className="row">
          <div className="col s8 offset-s2">
           <span>{item.nickName}</span>
           <p key={item._id} >{item.title}</p>
          </div>
        </div>
      </>
    )
  })
  return (
    <>
    {element}
    </>
  )
}