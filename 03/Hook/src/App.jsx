import { useState } from 'react'
import 'remixicon/fonts/remixicon.css'
import './App.css'

function App() {

    function my(){
      console.log('Click Is Working');
    }


  return (
    <div className='p-10'>
      <h1> React Hook Larning </h1>

    <button className=' mt-10 p-5 rounded-full px-10 text-green-500 bg-amber-700' onClick={my}> Click Me <i class="ri-cursor-line"></i> </button>



    </div>

  )
}

export default App
