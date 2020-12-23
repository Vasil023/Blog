import React from 'react'

export const AllUsers = ({user}) => {

  const users = user.map((item) => {
    return (
      <div key={item._id}>
       <div className="row ">
         <div className="col s8 offset-s2 block">
          <div className="nick-name">
            {item.nickName}
           </div>
          <div className="title">
          <p>{item.email}</p>
          </div>
         </div>
       </div>
      </div> 
   )
  })
  return(
    <>
      {users}
    </>
  )
}