import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Card } from 'primereact/card';

function AnuarioConvenios() {
  return (
    <>
      <Card>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <img src="https://www.uerj.br/wp-content/uploads/2018/02/logomarca-uerj.png" alt="UERJ" style={{ width: "100px", height: "100px" }} />
          <div>
            <h3 style={{ fontSize: "12" }}>PR-1 - Pró-Reitoria de Graduação<br /></h3>
            <h3 style={{ fontSize: "12" }}>CETREINA<br /></h3>
            <h3 style={{ fontSize: "12" }}>CETREINA Externo</h3>
          </div>
        </div>
        <h1 style={{ textAlign: "center", fontStyle: "italic", textDecoration: "underline" }}>Estatística de Convênios Iniciados</h1>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <DataTable showGridlines>
            <Column field="Ano" header="Ano"></Column>
            <Column field="Jan" header="Jan"></Column>
            <Column field="Fev" header="Fev"></Column>
            <Column field="Mar" header="Mar"></Column>
            <Column field="Abr" header="Abr"></Column>
            <Column field="Mai" header="Mai"></Column>
            <Column field="Jun" header="Jun"></Column>
            <Column field="Jul" header="Jul"></Column>
            <Column field="Ago" header="Ago"></Column>
            <Column field="Set" header="Set"></Column>
            <Column field="Out" header="Out"></Column>
            <Column field="Nov" header="Nov"></Column>
            <Column field="Dez" header="Dez"></Column>
          </DataTable>
        </div>
      </Card>
    </>
  );
}

export default AnuarioConvenios;
