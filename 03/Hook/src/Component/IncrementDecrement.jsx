



import { useState } from 'react'
import 'remixicon/fonts/remixicon.css'



function IncrementDecrement(){


  const [count, setcount] = useState(0);
  const [error, setError] = useState("");

  function increment() {
    setcount(count + 1);
    setError(""); // remove error when incrementing
  }

  function decrement() {
    if (count > 0) {
      setcount(count - 1);
      setError("");
    } 
    else {
      setError("Number cannot be less than zero");
    }
  }

  return (
    <div className='p-10 flex flex-col justify-center items-center gap-6'>

      {/* Alert Message */}
        <div className="text-red-700 px-6 py-3 rounded-xl text-lg font-semibold">
          {error}
        </div>



      <div className='bg-blue-700 w-90 h-50 flex justify-center items-center rounded-2xl'>
        <h1 className='font-bold text-8xl text-white'>{count}</h1>
      </div>

      <div className='flex gap-5'>
        <button
          className='mt-10 text-2xl rounded-full px-10 py-2 text-green-700 bg-amber-300 border-2 hover:bg-amber-400'
          onClick={increment}
        >
          Increment
        </button>

        <button
          className='mt-10 text-2xl rounded-full px-10 py-2 text-red-700 bg-amber-300 border-2 hover:bg-amber-400'
          onClick={decrement}
        >
          Decrement
        </button>
      </div>

    </div>
  )
}

export default IncrementDecrement;


