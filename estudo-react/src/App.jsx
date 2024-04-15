
import React from 'react'
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Login from './Login.jsx'
import Informacoes from './Informacoes.jsx'
import Grade from './Grade.jsx'
import { Button } from 'primereact/button';

function App() {

return (
    <>
        <PrimeReactProvider>
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Apresentacao />} />
                <Route path="/informacoes" element={<Informacoes />} />
                <Route path="/grade" element={<Grade />} />
            </Routes>
        </BrowserRouter>
        </PrimeReactProvider>
    </>
)
}
 
export default App