import { useState } from 'react'
// import './App.css'
import Cart from './Component/CartDesign';
import img1 from './Img/Model 1.jpg';
import img2 from './Img/Model 2.jpg';


function App() {

  return (
     <div className="flex gap-2 h-[100vh] w-full bg-[#aaa6] p-5">
    <Cart name='Pranto' view ={100} img={img1} />
    <Cart name='Santo' view ={300} img={img2} />
    
  </div>
  )
}

export default App
