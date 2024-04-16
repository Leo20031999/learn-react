import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import {Button} from 'primereact/button'
import './App.css'

function listaCurso() {
  return (
    <>
    <img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/1024px-React_Logo_SVG.svg.png" height = "100" width = "100"></img>
    <h1>Estudo React</h1>
    <p>Não temos cursos disponíveis, volte mais tarde.</p>
    <Link to = '/'>
      <Button label = 'Voltar para Apresentacao'/>
    </Link>
    </>
  )
}
 
export default listaCurso