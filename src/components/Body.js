import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Browse from './Browse';
import Header from "./Header";
import Error from './Error';



const Body = () => {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/error" element={<Error /> }/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Body;