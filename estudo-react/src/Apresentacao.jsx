
import React from 'react'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

import App from './App.jsx'
import Informacoes from './Informacoes.jsx'


function Apresentacao() {

return (
    <>
        <h1>Bem vindo</h1>
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<App />} />
                <Route path="/informacoes" element={<Informacoes />} />
            </Routes>
        </BrowserRouter>
        {window.location.pathname === '/' && (
            <>
                <button onClick={() => window.location.href = '/login'}>Login</button><br/><br/>
                <button onClick={() => window.location.href = '/informacoes'}>Mais informações</button>
            </>
        )}
    </>
)
}
 
export default Apresentacao