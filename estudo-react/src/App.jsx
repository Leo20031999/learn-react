
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
import Ano from './Ano.jsx'
import DeclaraSeg from './DeclaSeg.jsx'
import SelConveniosAtivos from './SelConveniosAtivos.jsx';
import SemanaGrad from './SemanaGrad.jsx';
import AnuarioConvenios from './w_con_anuario_convenios.jsx';

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
                <Route path="/ano" element={<Ano />} />
                <Route path="/declaSeg" element={<DeclaraSeg />} />
                <Route path="/selConveniosAtivos" element={<SelConveniosAtivos />} />
                <Route path="/semanaGrad" element={<SemanaGrad />} />
                <Route path="/convenios" element={<AnuarioConvenios />} />
                <Route path="*" element={<h1>Not Found</h1>} />
            </Routes>
        </BrowserRouter>
        </PrimeReactProvider>
    </>
)
}
 
export default App