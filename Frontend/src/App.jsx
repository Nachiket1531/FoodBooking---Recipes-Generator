
import './App.css'
import Routers from './routers/Routers'
import Footer from './components/footer/Footer'
import Navbar  from "./components/nav/Navbar"
import { useState } from 'react'
import Login from './components/sign_in/Login'

// aip key = AIzaSyAwjprrVaO4RlkRQWm_7OwUMX-zMTx8AyI

function App() {
  const [showoLgin , setShowLogin] = useState(false)
  return (
 <>
 {showoLgin?<Login setShowLogin={setShowLogin}/>: <></>}
 <Navbar setShowLogin={setShowLogin}/>
    <div className='app'>
    <Routers/>
   </div>
   <Footer/>
 </>
  )   
}

export default App
