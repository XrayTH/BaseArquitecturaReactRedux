import React from 'react'

const user = ({displayName, email}) => {

  return (
    <div>
        <p>Name: {displayName}</p>
        <p>Email: {email}</p>
        <p>----------------------</p>
    </div>
  )
}

export default user
