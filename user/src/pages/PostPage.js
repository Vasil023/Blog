import React from 'react'

export const PostPage = ({post}) => {
  
  const element = post.map((item) => {
    // console.log(item)
    return (
      <>
        <div className="row">
          <div className="col s8 offset-s2">
           <span>{item.user}</span>
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