import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const { id } = useParams()
  return (
    <div>
        {/* <h1 className='text-center text-4xl bg-orange-400 rounded-md p-4'>User</h1> */}
        <p className='text-center text-4xl bg-orange-400 rounded-md p-4'>User ID: {id}</p>
    </div>
  )
}

export default User
