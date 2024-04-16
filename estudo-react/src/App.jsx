
import React from 'react'
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Login from './Login.jsx'
import Informacoes from './Informacoes.jsx'
import Operacoes from './operacoes.jsx'
import Apresentacao from './Apresentacao.jsx'
import PesquisaCurso from './PesquisaCurso.jsx'
import ListaCurso from './ListaCurso.jsx'
import DeletaCurso from './DeletaCurso.jsx'
import CriaCurso from './CriaCurso.jsx'
import AtualizaCurso from './AtualizaCurso.jsx'

function App() {

return (
    <>
        <PrimeReactProvider>
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Apresentacao />} />
                <Route path="/informacoes" element={<Informacoes />} />
                <Route path="/operacoes" element={<Operacoes />} />
                <Route path="/pesquisaCurso" element={<PesquisaCurso />} />
                <Route path="/listaCurso" element={<ListaCurso />} />
                <Route path="/deletaCurso" element={<DeletaCurso />} />
                <Route path="/criaCurso" element={<CriaCurso />} />
                <Route path="/atualizaCurso" element={<AtualizaCurso />} />
            </Routes>
        </BrowserRouter>
        </PrimeReactProvider>
    </>
)
}
 
export default App