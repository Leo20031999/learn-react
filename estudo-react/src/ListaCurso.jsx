import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'primereact/button';
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';

import './App.css';

function ListaCurso() {
  const cursos = [
    { nome: 'Curso A', descricao: 'Descrição do Curso A', id: 1 },
    { nome: 'Curso B', descricao: 'Descrição do Curso B', id: 2 },
    { nome: 'Curso C', descricao: 'Descrição do Curso C', id: 3 },
  ];

  return (
    <>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/1024px-React_Logo_SVG.svg.png"
        height="100"
        width="100"
        alt="React Logo"
      />
      <h1>Estudo React</h1>
      {cursos.length > 0 ? (
        <TreeTable value={cursos}>
          <Column field="nome" header="Nome"></Column>
          <Column field="descricao" header="Descrição"></Column>
          <Column field="id" header="ID"></Column>
        </TreeTable>
      ) : (
        <p>Não temos cursos disponíveis, volte mais tarde.</p>
      )}
      <Link to="/">
        <Button label="Voltar para Apresentação" />
      </Link>
    </>
  );
}

export default ListaCurso;
