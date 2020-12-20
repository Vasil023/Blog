import React from 'react'

export const PostPage = ({post}) => {
  console.log(post)
  const element = post.map((item) => {
    return (
      <>
        <h5 key={item._id} >{item.title}</h5>
      </>
    )
  })
  return (
    <>
    {element}
    </>
  )
}