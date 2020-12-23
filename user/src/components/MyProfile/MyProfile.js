import React from 'react'
import img from '../../image/user.png'

import './MyProfile.css'

export const MyProfile = ({post}) => { 
  console.log(post)
 if (post.length) {
  return (
    <div className="row">
    <div className="col ">
      <div className="card">
        <div className="card-image">
          <img src={img}/>
        </div>
        <div className="card-content">
          <p>@username</p>
          <p className="user-name">{post[0].nickName}</p>
        </div>
      </div>
    </div>
  </div>  
  )  
 } else {
    return (
      <div className="row">
    <div className="col ">
      <div className="card">
        <div className="card-image">
          <img src={img}/>
        </div>
        <div className="card-content">
          <p>@username</p>
        </div>
      </div>
    </div>
  </div>  
    )
 }
      
}