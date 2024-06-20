
import React from 'react'
import Women from './shoppingfolder/pages/Women'
import './App.css'
import MainPage from './shoppingfolder/pages/MainPage'
import { Routes,Route, } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Routes>
      <Route path='/home' element={<MainPage/>}></Route>
        <Route path='/women' element={<Women/>}></Route>
      </Routes>
     
        
    </div>
  )
}

export default App