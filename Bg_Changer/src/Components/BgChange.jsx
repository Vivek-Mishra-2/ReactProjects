import React, { useState } from 'react'

const BgChange = () => {

  const [bgChange, setbgChange] = useState('#212121')

  const changeBg = (e) => {
    // console.log(e.target.value) 
    setbgChange(e.target.value)
  }

  return (
      <div className='w-full h-screen duration-200' style={{backgroundColor: bgChange}}>
        <h1 className='text-white text-center text-4xl mt-4 p-2'>Background Changer</h1>
        <div className='flex items-center w-5/6 m-auto mt-6 bg-white rounded-3xl justify-around'>
        <button  
        onClick= {changeBg}
        value={'red'}
        className='bg-red-500 text-white p-2 m-2 rounded-lg'>Red</button>
        <button 
        onClick= {changeBg}
        value={'blue'}
        className='bg-blue-500 text-white p-2 m-2 rounded-lg'>Blue</button>
        <button  
        onClick= {changeBg}
        value={'yellow'}
        className='bg-yellow-500 text-white p-2 m-2 rounded-lg'>Yellow</button>
        <button 
        onClick= {changeBg}
        value={'green'}
        className='bg-green-500 text-white p-2 m-2 rounded-lg'>Green</button>
        <button  
        onClick= {changeBg}
        value={'pink'}
        className='bg-pink-600 text-white p-2 m-2 rounded-lg'>Pink</button>        
        <button  
        onClick= {changeBg}
        value={'violet'}
        className='bg-violet-600 text-white p-2 m-2 rounded-lg'>Violet</button>        
        <button  
        onClick= {changeBg}
        value={'black'}
        className='bg-black text-white p-2 m-2 rounded-lg'>Black</button>        
      </div>
      </div>
  )
}

export default BgChange
