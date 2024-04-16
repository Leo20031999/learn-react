import { Button } from 'primereact/button'
import {Link} from 'react-router-dom'
import './App.css'
 
function operacoes() {
 
return (
    <>
        <h1>Bem vindo</h1>
        <p>Escolha uma operação</p>
        <br />
        <Link to = "/pesquisaCurso">
            <Button label = 'Pesquisar um Curso'/>
        </Link>
        <br />
        <Link to = "/criaCurso">
            <Button label = 'Criar um Curso'/>
        </Link>
        <br />
        <Link to = "/atualizaCurso">
            <Button label = 'Atualizar um Curso'/>
        </Link>
        <br />
        <Link to = "/deletaCurso">
            <Button label = 'Deletar um Curso'/>
        </Link>
        <br />
        <Link to = "/listaCurso">
            <Button label = 'Lista de Cursos'/>
        </Link>
        <br />
        <Link to = "/">
            <Button label = 'Voltar para a Apresentação'/>
        </Link>
    </>
)
}
 
export default operacoes