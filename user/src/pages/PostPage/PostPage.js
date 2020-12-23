import React from 'react'
import Moment from 'moment'

import './PostPage.css'

export const PostPage = ({post}) => {
  
  const element = post.map((item) => {
    
    return (
      <>
        <div className="row ">
          <div className="col s8 offset-s2 block">
           <div className="nick-name">
             {item.nickName}
            </div>
           <div className="title">
           <p key={item._id} >{item.title}</p>
           </div>
           <div className="data">
           {new Date(item.data).toLocaleDateString()}
           </div>
           <div className="wrapper">
            <div className="likes" >
            <i className="fal fa-heart"></i>
            </div>
            <div className="coment">
            <i className="fal fa-comments-alt"></i>
            </div>
           </div>
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