import React from 'react'

export const AllUsers = ({user}) => {
  // console.log(user)
  const users = user.map((item) => {
    return (
      <>
       <div className="row ">
         <div className="col s8 offset-s2 block">
          <div className="nick-name">
            {item.nickName}
           </div>
          <div className="title">
          <p key={item._id} >{item.email}</p>
          </div>
         </div>
       </div>
      </> 
   )
  })
  return(
    <>
      {users}
    </>
  )
}