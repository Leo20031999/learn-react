import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import {Button} from 'primereact/button'
import './App.css'

function deletaCurso() {
  return (
    <>
    <img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/1024px-React_Logo_SVG.svg.png" height = "100" width = "100"></img>
    <h1>Estudo React</h1>
    <div>
      <label>
        Nome do Curso:
        <input
          type="text"
          placeholder="Curso"
        />
      </label>
    </div>
    <div>
      <label>
        Código do Curso:
        <input
          type="text"
          placeholder="Código"
        />
      </label>
    </div>
    <Button label='Deletar' />
    <Link to = '/'>
      <Button label = 'Voltar para Apresentacao'/>
    </Link>
    </>
  )
}
 
export default deletaCurso