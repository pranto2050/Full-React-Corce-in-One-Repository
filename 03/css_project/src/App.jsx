import { useState } from 'react';
import Header from './Component/Header';
import Home from './Component/Home';
import Praduct from './Component/Praduct';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='p-4'>

    <Header />
    <div>
      <Home />

    </div>
    <div>
      <Praduct />
    </div>
    


    </div>
  )
}

export default App
