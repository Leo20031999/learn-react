import React, { useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Divider } from 'primereact/divider';


function DeclaraSegView(){

    return (
      <>
        <Card>
          <div style={{display:"flex",flexDirection:"row"}}>
            <DataTable showGridlines tableStyle={{ minWidth: '50rem' }}>     
                <Column field="Data" header="Data"></Column>
                <Column field="Aluno Segurado" header="Aluno Segurado"></Column>
            </DataTable>
            <Divider layout="vertical" />
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', gap: '1em'}}>
              <Button label="OK"/>
              <Button label="Pesquisa"/>
              <Button label="Ordena"/>
              <Button label="Filtra"/>
              <Button label="Cancela"/>
              <p>0 registro(s) encontrado(s)</p>
            </div>
          </div>
        </Card>
      </>
    );
}

export default DeclaraSegView;