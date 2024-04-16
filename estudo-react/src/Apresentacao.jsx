import { Button } from 'primereact/button'
import {Link} from 'react-router-dom'
import './App.css'
 
function apresentacao() {
 
return (
    <>
        <h1>Bem vindo</h1>
        <Link to = "/login">
            <Button label = 'Login'/>
        </Link>
        <br />
        <Link to = "/informacoes">
            <Button label = 'Informações'/>
        </Link>
        <br />
        <Link to = "/grade">
            <Button label = 'Grade'/>
        </Link>
    </>
)
}
 
export default apresentacao