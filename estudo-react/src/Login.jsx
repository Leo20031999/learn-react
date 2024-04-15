import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import {Button} from 'primereact/button'
import './App.css'

function Login() {
  const[count, setCount] = useState(0);

  const incrementCount = () => {
    setCount((prevState)=>prevState+1)
  };

  return (
    <>
    <img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/1024px-React_Logo_SVG.svg.png" height = "100" width = "100"></img>
    <h1>Estudo React</h1>
    <h2>Bem vindo ao estudo-react 1.0</h2>
    <div>
      <label>
        Nome:
        <input
          type="text"
          placeholder="Digite seu nome"
        />
      </label>
    </div>
    <div>
      <label>
        Email:
        <input
          type="text"
          placeholder="Digite seu email"
        />
      </label>
    </div>
    <div>
      <label>
        Matricula:
        <input
          type="text"
          placeholder="Digite sua matrícula"
        />
      </label>
    </div>
    <div>
      <label>
        Data de nascimento:
        <input
          type="date"
          placeholder="Digite sua data de nascimento"
        />
      </label>
    </div>
    <Button label = 'Entrar' onClick = {incrementCount}/> 
    <Link to = '/'>
      <Button label = 'Voltar para Apresentacao'/>
    </Link>

    <p>Você tentou acessar nosso site {count} vezes.</p><br/>
    <p>Agradecemos sua visita, mas ainda falta componentes.<br/> Obrigado por acessar.</p>
    <footer><br></br>Created by Leonardo</footer>
    </>
  )
}
 
export default Login