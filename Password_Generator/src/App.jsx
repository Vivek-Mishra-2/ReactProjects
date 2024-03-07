import { useCallback, useEffect, useState, useRef } from 'react'
import './App.css'

function App() {
  const [length, setlength] = useState(8)
  const [numberAllowed, setnumberAllowed] = useState(false)
  const [charAllowed, setcharAllowed] = useState(false)
  const [password, setpassword] = useState("")

  // USE-REF HOOK TO HANDLE THE PASSWORD COPY FUNCTIONALITY

  const passwordRef = useRef(null);

 // USE-CALLBACK HOOKS TO CREATE A CLEANER AND MORE EFFICIENT FUNCTION THAT ONLY RE-RENDERS WHEN THE DEPENDENCIES CHANGE
  const copyPassToClipBoard = useCallback(()=> {
      passwordRef.current?.select()
      passwordRef.current?.setSelectionRange(0, 100)
      window.navigator.clipboard.writeText(password)
  },[password])

  // Function to handle the length of password, numberAllowed and charAllowed
  const passwordGenerator = useCallback( () => {
    let pass = ""
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*()_+=-{}[]|?/.,:;"

    for (let i = 1; i <=length; i++) {
      let char = Math.floor(Math.random() *str.length + 1);
      pass += str.charAt(char)
    }
    setpassword(pass);
  }, [length, numberAllowed, charAllowed, setpassword]);


  // USE-EFFECT HOOK TO HANDLE THE PASSWORD GENERATOR FUNCTION CALLING EVERYTIME WHEN LENGTH, NUMBERALLOWED AND CHARALLOWED CHANGES
  useEffect(() => {
    passwordGenerator();
  }, [passwordGenerator, length, numberAllowed, charAllowed])



  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg py-4 px-4 my-8 text-orange-500 bg-gray-700'>
        <h1 className='text-white text-center text-4xl'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text"
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='Password'
          readOnly
          ref={passwordRef}
          />
          <button 
          onClick={copyPassToClipBoard}
          className='outline-none bg-blue-700 text-white px-2 py-1 shrink-1 hover:bg-black hover:text-white hover:font-bold'>Copy</button>
        </div>


        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range" 
            min={8}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {setlength(e.target.value)}}
            />
            <label>Length: {length}</label>
          </div>

          {/* Code for inlcuding numbers */}

          <div className='flex items-center gap-x-1'>
          <input type="checkbox" 
          defaultChecked={numberAllowed} 
          id='numberInput'
          onChange={() => {
            setnumberAllowed((prev) => !prev)
          }} 
          />
            <label htmlFor='numberInput'>Numbers</label>
          </div>

          {/* Code for inlcuding characters */}

          <div className='flex items-center gap-x-1'>
          <input type="checkbox" 
          defaultChecked={charAllowed} 
          id='characterInput'
          onChange={() => {
            setcharAllowed((prev) => !prev)
          }} 
          />
            <label htmlFor='characterInput'>Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
