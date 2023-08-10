import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

//import component
import Home from '../views/home'

export const PageRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
  )
}
