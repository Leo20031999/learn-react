import './App.css'
import React from 'react'
import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom'

import App from './App.jsx'
import Informacoes from './Informacoes.jsx'


function Apresentacao() {
  //const navigate = useNavigate();
  return (
    <>
      <h1>Bem vindo</h1>
      <BrowserRouter>
        <Routes>
            <Route path="/login" element={<App />} />
            <Route path="/informacoes" element={<Informacoes />} />
        </Routes>
      </BrowserRouter>
      <button onClick={() => navigate('/login')}>Login</button><br/><br/>
      <button onClick={() => navigate('/informacoes')}>Mais informações</button>
    </>
  )
}
 
export default Apresentacao