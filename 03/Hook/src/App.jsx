import { useState } from 'react'
import 'remixicon/fonts/remixicon.css'
import './App.css'
import { useFormState } from 'react-dom';

function App() {

 

    const[count,setcount] = useState(0);
    
    function increment(){
      setcount = 98;
    }



  return (
    <div className='p-10 flex flex-col justify-center items-center'>
      <div className=' bg-blue-700 w-90 h-50 flex justify-center items-center rounded-2xl'>
        <h1 className=' font-bold text-8xl'> {count} </h1>
      </div>

    <div className=' flex gap-5'>
      <button className=' mt-10 text-2xl rounded-full px-10 text-green-500 bg-amber-300 border-2' onClick={increment}> Increment </button>
      <button className=' mt-10 text-2xl rounded-full px-10 text-green-500 bg-amber-300 border-2' > Decrement </button>

    </div>



    </div>

  )
}

export default App
