import { Button } from 'primereact/button'
import {Link} from 'react-router-dom'
import './App.css'
 
function apresentacao() {
 
return (
    <>
        <img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/1024px-React_Logo_SVG.svg.png" height = "100" width = "100"></img>
        <h1>Bem vindo</h1>
        <Link to = "/login">
            <Button label = 'Login'/>
        </Link>
        <br />
        <Link to = "/operacoes">
            <Button label = 'Operacoes'/>
        </Link>
        <br />
        <Link to = "/informacoes">
            <Button label = 'Informações'/>
        </Link>
        <br />
    </>
)
}
 
export default apresentacao