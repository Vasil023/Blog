import React from 'react'

import './PostPage.css'

export const PostPage = ({post}) => {
  
  const element = post.map((item) => {
    
    return (
      <div key={item._id}>
        <div  className="row ">
          <div className="col s8 offset-s2 block">
           <div className="nick-name">
             {item.nickName}
            </div>
           <div className="title">
           <p  >{item.title}</p>
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
      </div>
    )
  })
  return (
    <>
    {element}
    </>
  )
}