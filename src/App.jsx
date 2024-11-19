import { useState } from 'react'

import './App.css'
import {BrowserRouter , Routes ,Route} from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <div className='mb-[60px]'>
  <Navbar/>
  </div>
    <Routes>
<Route  path='/' element = {<Home/>}/>

    </Routes>
    </BrowserRouter>
  
    </>
  )
}

export default App
